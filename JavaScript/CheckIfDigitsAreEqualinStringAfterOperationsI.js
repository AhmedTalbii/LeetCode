var hasSameDigits = function(s) {
    let arr = s.split("").map(x => x-0);
    while (arr.length > 2) {
        let temp = arr.slice(1,)
        for (let i = 1; i < arr.length; i++) temp[i-1] = (arr[i-1] + arr[i]) % 10;
        arr = [...temp];
    }
    return arr[0] === arr[1];
};