'use strict';

var sumZero = function(n) {
    let isOdd = false, res = [];
    if (n % 2 === 1) isOdd = true;
    for (let i = -Math.floor(n/2); i <= Math.floor(n/2); i++) (!isOdd && i === 0) ? null : (i === -0 && n === 1) ? res.push(-i) : res.push(i);
    return res
};

console.log(sumZero(1));
console.log(sumZero(2));
console.log(sumZero(3));
console.log(sumZero(4));
console.log(sumZero(5));
console.log(sumZero(6));
