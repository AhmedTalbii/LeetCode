var expect = function(val) {
    let fatima = new Object()
    fatima.toBe = (num) => {
        if (val === num) return true;
        throw "Not Equal";
    }
    fatima.notToBe = (num) => {
        if (val !== num) return true;
        throw new Error("Equal");
    }
    return fatima;
};

console.log(expect(5).toBe(null));
