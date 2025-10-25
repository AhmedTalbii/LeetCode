var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b);
    let s = 1;
    let set = new Set(nums);
    for (let v of set) {
        if (v <= 0) continue;
        if (v !== s) return s;
        s++;
    }
    return s;
};

console.log(firstMissingPositive([100000, 3, 4000, 2, 15, 1, 99999]));
