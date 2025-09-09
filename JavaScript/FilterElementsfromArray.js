"use strict";

var filter = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(filter([0, 10, 20, 30], (x) => x > 10));
