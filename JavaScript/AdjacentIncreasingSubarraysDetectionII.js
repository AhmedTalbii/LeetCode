var maxIncreasingSubarrays = function(nums) {
    let n = nums.length;
    let inc = Array(n).fill(1);
    for (let i = 1; i < n; i++) 
        if (nums[i] > nums[i-1]) 
            inc[i] = inc[i-1] + 1;
    
    let k = Math.floor(Math.max(...inc) / 2);
    
    for (let i = 1; i < n; i++) {
        if (inc[i] <= k) continue;
        if (i - inc[i] < 0) continue;
        if (inc[i - inc[i]] >= inc[i]) 
            k = Math.max(k, inc[i]);
    }
    
    return k;
};
console.log(maxIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7])); // 2