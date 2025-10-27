var numberOfBeams = function (bank) {
    bank = bank.map(x => x.split('1').length - 1);
    bank = bank.filter(x => x !== 0);
    let res = 0;
    for (let i = 1; i < bank.length;i++) {
        res += bank[i-1] * bank[i];
    }
    return res;
};

console.log(numberOfBeams(["011001","000000","010100","001000"]));
