

var permute = function(nums) {
    let res = [nums], f = true
    function check(arr1, arr2) {
        if (arr1.join("") === arr2.join("")) {
            return true
        } 
        return false
    }
    
    function solve(arr, i) {
        if (check(nums, arr)) {
            if (!f) {
                return
            } else {
                f = false
            }
        }
        
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        res.push([...arr])
        
        if (i === arr.length-2) {
            solve(arr, 0)
        }
        solve(arr, i+1)
    }
    solve([...nums],0)
    res.pop()
    return res
};

console.log(permute("1234".split("")));

// [1,1,2]
// f1,f2