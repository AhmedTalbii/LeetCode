var createCounter = function(init) {
    let old = init;
    return {
        increment:()=> {return ++init},
        decrement:()=> {return --init},
        reset:()=> {return init = old}
    }
};

const counter = createCounter(0)
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5
console.log(counter.reset()); // 5
