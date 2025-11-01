function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
    function rec(root) {
        if (root.left && root.left.val >= root.val) {console.log(root.val);return false};
        if (root.right && root.right.val <= root.val) {console.log(root.val);return false};
        if (root.left) rec(root.left);
        if (root.right) rec(root.right);
        return true
    }
    return rec(root);
};

const root = new TreeNode(
    5,
    new TreeNode(4),
    new TreeNode(6, new TreeNode(3), new TreeNode(7))
);

console.log(isValidBST(root));
