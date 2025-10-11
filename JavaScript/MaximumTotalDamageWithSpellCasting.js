var maximumTotalDamage = function (power) {
    power.sort((a, b) => a - b);
    let n = power.length;
    if (n === 1) return power[0];
    let res = 0;
    let counted0 = false;

    let i = n - 1;
    while (i >= 0) {
        let right = 0;
        let k = i;
        while (k >= 0 && power[k] === power[i]) { right += power[i]; k--; }

        if (k >= 0) {
            let left = 0;
            let j = k;
            while (j >= 0 && power[j] === power[k]) { left += power[k]; j--; }

            if (j === 0 || k === 0) counted0 = true;
            if (power[i] - power[k] <= 2) {
                if (right >= left) res += right;
                else res += left;
                i = j;
            } else {
                res += right;
                if (k === 0) counted0 = true;
                i = k;
            }
        } else {
            res += right;
            i = k;
        }
    }

    if (!counted0 && (n === 1 || power[0] <= power[1] - 2)) res += power[0];
    return res;
};



console.log(maximumTotalDamage([1, 1, 3, 4]));
console.log(maximumTotalDamage([7, 1, 6, 6]));
console.log(maximumTotalDamage([5,9,2,10,2,7,10,9,3,8]));
console.log(maximumTotalDamage([5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]));
