'use strict';

var compose = function(functions) {
    let i = functions.length-1
    return function(x) {
        while (i >= 0) {
            x = functions[i](x)
            i--
        }
        return x
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4));
