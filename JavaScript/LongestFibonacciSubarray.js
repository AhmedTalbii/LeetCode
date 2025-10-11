var longestSubarray = function(nums) {
    let n = nums.length, m = 2, c = 2;
    for (let i = 2; i < n; i++) {
        if (nums[i] === nums[i - 1] + nums[i - 2]) {
            c++;
        } else {
            c = 2;
        }
        if (c > m) m = c;
    }
    return m;
};