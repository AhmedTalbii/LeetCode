// var hasSameDigits = function(s) {
//     let arr = s.split("").map(x => x-0);
//     while (arr.length > 2) {
//         let temp = arr.slice(1,)
//         for (let i = 1; i < arr.length; i++) temp[i-1] = (arr[i-1] + arr[i]) % 10;
//         arr = [...temp];
//     }
//     return arr[0] === arr[1];
// };
var hasSameDigits = function(s) {
    let arr = s.split("").map(x => +x);
    while (arr.length > 2) {
        let i = 0, j = arr.length - 2;
        let l, r;
        while (i <= j) {
            l = (arr[i] + arr[i+1]) % 10;
            r = (arr[j] + arr[j+1]) % 10;
            arr[i] = l;
            arr[j] = r;
            i++;
            j--;
        }
        arr.pop();
    }
    console.log(arr[0] , arr[1]);
    
    return arr[0] === arr[1];
};

console.log(hasSameDigits("34789")); // false


console.log("Result:", hasSameDigits("34789"));
