
var hasIncreasingSubarrays = function(nums, k) {
    let isIncreasing = function(s) {
        for (let i = s+1; i < s+k; i++) if (nums[i] <= nums[i-1]) return false;
        return true;
    }
    for (let i = 0; i <= nums.length-k*2; i++) if (isIncreasing(i) && isIncreasing(i+k)) return true;
    return false;
};
 
console.log(hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3));
