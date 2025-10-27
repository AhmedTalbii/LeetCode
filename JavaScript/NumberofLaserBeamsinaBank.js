var numberOfBeams = function (b) {
    b = b.map(x => x.split('1').length - 1);
    let res = 0, p = 0;
    for (let v of b) {
        if (v) {res+=v*p; p=v}
    }
    return res;
};

console.log(numberOfBeams(["00000","00101","10100","11110","11100","01001","00100","11010"]));
