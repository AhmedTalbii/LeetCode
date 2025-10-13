var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = [], i = 0, len = nums.length, k = len - 1, exist = new Map();
    for (let j = 1; j < len - 1; j++) {
        i = 0;
        k = len - 1;
        while (i < j && j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                const triplet = [nums[i], nums[j], nums[k]];
                const key = triplet.join(',');
                if (!exist.has(key)) {
                    exist.set(key, true);
                    res.push(triplet);
                }
                i++; k--;
            } else if (sum > 0) k--;
            else i++;
        }
    }
    return res
};

console.log(threeSum([0, 0, 0, 0]));