var chunk = function(arr, size) {
    let res = []
    for (let i = 0 ; i < arr.length ; i += size) {
        let mArr = arr.slice(i,i+size);
        res.push(mArr);
    }
    return res
};

console.log(chunk([1,2,3,4,5], 1));