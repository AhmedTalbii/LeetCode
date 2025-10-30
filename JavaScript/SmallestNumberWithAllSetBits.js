var smallestNumber = function(n) {
    var isValid = (n) => {
        while (n > 0) {
            if (n % 2 === 0) return false;
            n = Math.floor(n/2);
        }
        return true;
    }
    while (!isValid(n)) n++;
    return n;
};

console.log(smallestNumber(5));
