/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palindrome = String(x).split("").reverse().join("");
    return String(x) === palindrome;
    
};