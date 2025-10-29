function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderTraversal = function (root) {
    let res = [];
    function rec(root) {
        if (!root) return;
        if (root.left) rec(root.left);
        res.push(root.val);
        if (root.right) rec(root.right);
    }
    rec(root);
    return res;
};

const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(
            5,
            new TreeNode(6),
            new TreeNode(7)
        )
    ),
    new TreeNode(
        3,
        null,
        new TreeNode(8, new TreeNode(9), null)
    )
);

console.log(inorderTraversal(root));
