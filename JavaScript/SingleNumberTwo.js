'use strict';

var singleNumber = function (nums) {
  let n = new Map()
  for (let x of nums) n.set(x, (n.get(x) || 0) + 1) ;
  for (let [name,ele] of n) if (ele === 1) return name ;
};

console.log(singleNumber([2,2,3,2]));