function isMagical(arr, k, n) {
    let sum = 0;
    for (let v of arr) {
        if (v >= n) return false;
        sum += 2 ** v;
    }
    let setBits = sum.toString(2).replace(/0/g,"").length;
    return setBits === k;
}

function magicalSum(m, k, nums) {
    const MOD = 1e9 + 7;
    let total = 0;

    function generate(seq = []) {
        if (seq.length === m) {
            if (isMagical(seq, k)) {
                let prod = seq.reduce((acc, i) => (acc * nums[i]) % MOD, 1);
                total = (total + prod) % MOD;
            }
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            seq.push(i);
            generate(seq);
            seq.pop();
        }
    }

    generate();
    return total;
}

console.log(magicalSum(5, 5, [1,10,100,10000,1000000]));
