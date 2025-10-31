var getSneakyNumbers = function (nums) {
    let mp = new Map(), mp2 = new Map();
    nums.forEach(x => {
        if (mp.has(x)) {
            let v = mp.get(x) + 1;
            mp.set(x, v);
            if (v === 2) {
                const m = mp2.get(v) || new Map();
                m.set(x, (m.get(x) || 0) );
                mp2.set(v, m);
            } else {
                mp2.delete(v)
            }
        }
        else mp.set(x, 1);
    });
    const res = Array.from(mp2.get(2)?.keys() || []);
    return res
};

console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
