var countEven = function(num) {
    let res = 0
    for (let i = 2; i <= num ; i++) {
        let miniRes = 0; x = i;
        while (x) {miniRes += x%10 ; x = Math.floor(x/10)} ;
        if (miniRes % 2 === 0) res++;
    }
    return res
};

console.log(countEven(4));
console.log(countEven(30));