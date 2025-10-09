var spiralOrder = function(matrix) {
    let t = 0, b = matrix.length - 1, l = 0, r = matrix[0].length - 1, res = [];
    while (t <= b && l <= r) {
        for (let i = l; i <= r; i++) {res.push(matrix[t][i])} t++;
        for (let i = t; i <= b; i++) {res.push(matrix[i][r])} r--;
        if (t <= b) for (let i = r; i >= l; i--) {res.push(matrix[b][i])} b--;
        if (l <= r) for (let i = b; i >= t; i--) {res.push(matrix[i][l])} l++;
    }
    return res
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));