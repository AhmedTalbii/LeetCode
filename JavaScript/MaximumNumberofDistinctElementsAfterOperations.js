var maxDistinctElements = function (nums, k) {
    nums.sort((a, b) => a - b);
    let used = new Set();
    let last = -Infinity;
    for (let x of nums) {
        let val = Math.max(x - k, last + 1);
        if (val > x + k) continue;
        used.add(val);
        last = val;
    }
    return used.size;
};

// console.log(maxDistinctElements([1,2,2,3,3,4], 2));
// console.log(maxDistinctElements([4,4,4,4], 1));
console.log(maxDistinctElements([8, 7, 8, 7, 10], 1));