function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
    function rec(root) {
        if ((root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val))return false;
        if (root.left) rec(root.left);
        if (root.right) rec(root.right);
        return true
    }
    return rec(root);
};

const root = new TreeNode(
    2,
    new TreeNode(2),
    new TreeNode(2)
);

console.log(isValidBST(root));
