var generateMatrix = function (n) {
    if (n === 1) return [[1]];
    let res = Array.from({ length: n }, () => Array(n).fill(0));
    let i = 0, j = 0, hor = true, plus = true, counter = 1;
    while (true) {
        res[i][j] = counter
        if (
            (i === 0 || res[i - 1][j] > 0) &&
            (i === n - 1 || res[i + 1][j] > 0) &&
            (j === 0 || res[i][j - 1] > 0) &&
            (j === n - 1 || res[i][j + 1] > 0)
        ) break;
        counter++;
        // if found end of 0 move to rigth 
        if (hor) {
            if (plus) {
                j++;
            } else {
                j--
            }
        } else {
            if (plus) {
                i++;
            } else {
                i--;
            }
        }
        // check and change the direction
        if (plus && hor && (j + 1 === n || res[i][j + 1] > 0)) hor = false;
        if (plus && !hor && (i + 1 === n || res[i + 1][j] > 0)) { hor = true; plus = false };
        if (!plus && hor && (j - 1 < 0 || res[i][j - 1] > 0)) { hor = false };
        if (!plus && !hor && (i - 1 < 0 || res[i - 1][j] > 0)) { hor = true; plus = true };
    }
    return res
};

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
