function permute(nums) {
    let res = [], used = {}
    function solve(arr) {
        if (arr.length === nums.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0;i < nums.length; i++) {
            if (used[nums[i]]) continue;
            arr.push(nums[i]);
            used[nums[i]] = true
            solve(arr)
            used[nums[i]] = false
            arr.pop(nums[i]);
        }
    }
    solve([]);
    return res;
};

console.log(permute(9 , 24479));