var createCounter = function(n) {
    return function() {
        return n++;
    };
};
let arr = []
let counter = createCounter(1)
arr.push(counter())
arr.push(counter())
arr.push(counter())
arr.push(counter())
console.log(arr)