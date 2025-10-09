var minTime = function (skill, mana) {
    let res = Array.from({ length: mana.length }, () => Array(skill.length + 1).fill(0));

    for (let i = 0; i < mana.length; i++) {
        for (let j = 0; j < skill.length; j++) {
            if (i === 0) {
                res[i][j + 1] = mana[i] * skill[j] + res[i][j];
            } else {
                res[i][j + 1] = Math.max(res[i - 1][j + 1], res[i][j]) + mana[i] * skill[j];
            }
        }

        for (let j = skill.length - 1; j >= 0; j--) {
            res[i][j] = res[i][j + 1] - mana[i] * skill[j];
        }
    }

    return res[res.length-1][res[0].length-1]
};

console.log(minTime([1, 5, 2, 4], [5, 1, 4, 2]));