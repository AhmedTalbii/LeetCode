// Binary Search Solution 
var findMin = function(nums) {
    let l = 0, r = nums.length-1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] > nums[r]) l = m + 1;
        else r = m;
    }
    return nums[l];
};