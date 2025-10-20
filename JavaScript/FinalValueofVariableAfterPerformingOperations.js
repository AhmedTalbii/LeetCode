var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (let v of operations) {
        if (v[1] === "+") x++;
        else x--;
    }
    return x;
};