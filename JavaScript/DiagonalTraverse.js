'use strict';

var findDiagonalOrder = function (mat) {
    if (!mat.length || !mat[0].length) return [];
    let GoingUp = true
    let i = 0, j = 0
    let LenVertical = mat.length, LenHorizontal = mat[0].length
    let Arr = []
    // From bottom left To Top Right : j++ && i-- untill i-1 < 0
    // From Top right To Bottom left : i++ && j-- untill j-1 < 0
    while (true) {
        if (i + 1 >= LenVertical && j + 1 >= LenHorizontal) {
            if (mat[i][j] || mat[i][j] === 0) {
                Arr.push(mat[i][j])
            }
            break;
        }
        while (GoingUp) {
            if (mat[i][j] || mat[i][j] === 0) {
                Arr.push(mat[i][j])
            }
            if (j === LenHorizontal-1) {
                i++
                GoingUp = false;
                break;
            }
            if (i === 0) {
                j++
                GoingUp = false;
                break;
            }
            j++;
            i--;
        }
        while (!GoingUp) {
            if (mat[i][j] || mat[i][j] === 0) {
                Arr.push(mat[i][j])
            }
            if (i === LenVertical-1) {
                j++
                GoingUp = true;
                break;
            }
            if (j === 0) {
                i++
                GoingUp = true;
                break;
            }
            i++;
            j--;
        }
    }
    return Arr
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(findDiagonalOrder([[1, 2], [3, 4]]));
console.log(findDiagonalOrder([[2,5],[8,4],[0,-1]]));
