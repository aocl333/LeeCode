/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))) { 
            stack.push(s.charAt(i)); 
        } else {
            let pop = stack.pop(); 
            if(map.get(pop) !== s.charAt(i)) {
                return false;
            }
        }
    }
    return stack.length === 0;
};