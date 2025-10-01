var numWaterBottles = function(numBottles, numExchange) {
    let res = 0,empty = 0
    while (numBottles > 0) {
        res += numBottles
        empty += numBottles
        if (empty > 0) {
            numBottles = Math.floor(empty/numExchange)
            empty = empty%numExchange
        }
    }
    return res 
};

console.log(numWaterBottles(15, 4));