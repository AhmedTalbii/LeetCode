function CanBePlaced(Board, i, j) {
    let len = Board.length - 1
    // check hor
    for (let c = len; c >= 0; c--) if (Board[i][c] === "Q") return false;
    // check ver
    for (let c = len; c >= 0; c--) if (Board[c][j] === "Q") return false;
    // check diag (\)
    for (let r = i, c = j; r >= 0 && c >= 0; r--, c--) if (Board[r][c] == "Q") return false;
    for (let r = i, c = j; r <= len && c <= len; r++, c++) if (Board[r][c] == "Q") return false;
    // check diag (/)
    for (let r = i, c = j; r >= 0 && c <= len; r--, c++) if (Board[r][c] == "Q") return false;
    for (let r = i, c = j; r <= len && c >= 0; r++, c--) if (Board[r][c] == "Q") return false;
    return true;
}

var totalNQueens = function(n) {
    let arr = Array.from({length: n}, () => Array.from({length: n}, () => "."));
    let res = 0;
    function solve(Board, i = 0) {
        if (i === n) {
            res++;
            return;
        }
        for (let j = 0; j < n; j++) {
            if (CanBePlaced(Board, i, j)) {
                Board[i][j] = "Q";
                solve(Board, i+1);
                Board[i][j] = ".";
            }
        }
    }
    solve(arr);
    return res;  
};

console.log(totalNQueens(4));