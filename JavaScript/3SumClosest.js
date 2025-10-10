var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let n = nums.length
    let closest, diff = Infinity;
    for (let i = 0; i < n - 2; i++) {
        let j = i + 1, k = n - 1;
        while (j < k) {
            let s = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - s) < diff) {
                closest = s;
                diff = Math.abs(target - s);
            }
            if (s < target) j++;
            else k--;
        }
    }
    return closest
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));