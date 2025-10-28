var countValidSelections = function(nums) {
    let res = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) continue;
        for (let l of [true, false]) {
            let arr = [...nums];
            let j = i, left = l;
            while (j >= 0 && j < n) {
                if (arr[j] > 0) {
                    arr[j]--;
                    left = !left;
                }
                if (left) j--;
                else j++;
            }
            if (!arr.some(x => x !== 0)) res++;
        }
    }
    return res;
};

console.log(countValidSelections([1,0,2,0,3])); // 2
console.log(countValidSelections([2,3,4,0,4,1,0])); // 0
