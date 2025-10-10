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

function IsValid(Board) {
    if (!Board) return false
    let counter = 0;
    for (let i = 0; i < Board.length; i++) {
        if (Board[i].includes("Q")) counter++;
    }
    if (counter === Board.length) return true;
    return false;
}

var solveNQueens = function (n) {
    if (n === 1) return [["Q"]];
    let arr = Array.from({ length: n }, () => Array.from({ length: n }, () => "."));
    let res = []
    function solve(Board, i = 0) {
        if (i === Board.length) {
            res.push(Board.map(r => r.join("")));
            return;
        }
        for (let j = 0; j < Board.length; j++) {
            if (CanBePlaced(Board, i, j)) {
                Board[i][j] = "Q";
                solve(Board, i + 1);
                Board[i][j] = ".";
            }
        }
    }
    solve(arr)
    return res;
};

console.log(solveNQueens(4));
console.log(solveNQueens(2));
