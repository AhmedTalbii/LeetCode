function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var maxDepth = function(root) {
    let max = 0;
    if (!root) return max;
    function slove(node, i) {
        if (node.left) slove(node.left, i+1);
        if (node.right) slove(node.right, i+1);
        if (i > max) max = i;
    }
    slove(root, 1);
    return max;
};


const root1 = new TreeNode(3, 
                new TreeNode(9), 
                new TreeNode(20, new TreeNode(15), new TreeNode(7))
              );
console.log(maxDepth(root1)); 

const root2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(root2));