var once = function(fn) {
    let ft = true
    return function(...args){
        if (!ft) {
            return undefined
        }
        ft = false
        return fn(...args)
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
