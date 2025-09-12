var fibGenerator = function* () {
    let x = 0 , y = 1
    for (;;) {
        yield x;
        [x,y] = [y, x+y]
    }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
