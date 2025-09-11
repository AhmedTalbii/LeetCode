"use strict";
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var binaryTreePaths = function (root) {
  let res = [],
    ma = [],
    qeue = [];

  function solve(root) {
    ma.push(root.val);

    if (root.left !== null) {
      if (root.right !== null) {
        qeue.push(root.right);
      }
      return solve(root.left);
    }
    if (root.right !== null) {
      return solve(root.right);
    }
    if (root.left === null && root.right === null) {
      res.push(ma.join("->"));
      ma = [ma[0]];
      if (qeue.length !== 0) {
        let t = qeue[qeue.length - 1];
        qeue.pop();
        solve(t);
      }
      return;
    }
  }
  solve(root);
  return res;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);

console.log(binaryTreePaths(root));
