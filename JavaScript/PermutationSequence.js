function permute(nums, k) {
    let res = [], used = {}
    function solve(arr) {
        if (res.length >= k) return;
        if (arr.length === nums.length) {res.push([...arr]); return}
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

var getPermutation = function(n,k) {
    let arr = Array.from({length:n},(_,index)=> index+1)
    return permute(arr, k)[k-1].join("")
};

console.log(getPermutation(3, 3));
