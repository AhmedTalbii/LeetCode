"use strict";
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var binaryTreePaths = function(root) {
  let res = [];
  let qeue = new Map();

  function solve(node, path = []) {
    path.push(node.val);

    if (node.left) {
      if (node.right) qeue.set(node, [...path, node.right.val]);
      solve(node.left, [...path]);
    }

    if (node.right) solve(node.right, [...path]);

    if (!node.left && !node.right) {
      res.push(path.join("->"));

      if (qeue.length > 0) {
        const lastKey = Array.from(qeue.keys()).pop();
        const newPath = qeue.get(lastKey).slice(0, -1);
        qeue.delete(lastKey);
        solve(lastKey, newPath);
      }
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
