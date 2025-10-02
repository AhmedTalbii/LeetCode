var maxBottlesDrunk = function(numBottles, numExchange) {
    let res = numBottles
    while (numBottles - numExchange >= 0) {
        numBottles -= numExchange-1
        numExchange++
        res++
    }
    return res 
};

console.log(maxBottlesDrunk(10, 3));