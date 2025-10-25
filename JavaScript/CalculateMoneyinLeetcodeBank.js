var totalMoney = function(n) {
    let s = 1, bc = 1,c = 1, res = 0;
    while (bc <= n) {
        res += c;
        if (c === s+6) {c=s;s++}
        c++;
        bc++;
    }
    return res;
};

console.log(totalMoney(20));