var minNumberOperations = function(target) {
    if (!target) return 0;
    let res = target[0];
    for (let i = 1; i < target.length; i++) {
        if (target[i] > target[i - 1]) {
            res += (target[i] - target[i - 1]);
        }
    }
    return res;
};
// brute force 
// var minNumberOperations = function(target) {
//     let n = target.length, initial = Array.from({ length: n }, () => 0), res = 0;
//     while (initial.join("")!==target.join("")) {
//         let changed = false;
//         for (let i = 0; i < n; i++) {
//             if (initial[i] < target[i]) {initial[i]++; changed = true}
//             else if (changed && !(initial[i] < target[i])) {
//                 res++;
//                 changed = false;
//             }
//         }
//         if (changed) res++;
//     }
//     return res;
// };

console.log(minNumberOperations([1,2,3,2,1]));
console.log(minNumberOperations([3,1,1,2]));
console.log(minNumberOperations([3,1,5,4,2]));
