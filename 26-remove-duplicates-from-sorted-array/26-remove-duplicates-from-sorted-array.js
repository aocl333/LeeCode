/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var count = nums.length - 1;
    while(count >= 0) {
        if(count == nums.lastIndexOf(nums[count])) {
            count--;
        } else {
            nums.splice(count, 1);
        }
    }

    return nums.length;
};