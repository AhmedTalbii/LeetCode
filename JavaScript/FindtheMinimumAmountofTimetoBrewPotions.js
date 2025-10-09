var minTime = function (skill, mana) {
    let res = Array.from({length: skill.length}, () => []);
    for (let manaIndex = 0; manaIndex < mana.length; manaIndex++) {
        for (let i = 0; i < skill.length; i++) {
            if (i>0 && res[i-1].length > res[i].length) {
                let diff = res[i-1].length - res[i].length
                for (let bB = diff; bB >= 1; bB--) {
                    res[i].push("⬛");
                }
            }
            for (let j = 1; j <= skill[i] * mana[manaIndex]; j++) {
                res[i].push("🟩")
            }
        }
    }
    console.log(res[res.length-1].length);
};

minTime([1, 2, 3, 4], [1,2]);
minTime([1,5,2,4], [5,1,4,2]); // 110
minTime([1,1,1], [1,1,1]);

// example 3 visualize: skill = [1,2,3,4], mana = [1,2]
// potion 0: 🟥
// potion 1: 🟩
// waiting: ⬛
// W0 🟥🟩🟩⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
// W1 ⬛🟥🟥🟩🟩🟩🟩⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
// W2 ⬛⬛⬛🟥🟥🟥⬛🟩🟩🟩🟩🟩🟩⬛⬛⬛⬛⬛⬛⬛⬛
// W3 ⬛⬛⬛⬛⬛⬛🟥🟥🟥🟥⬛⬛⬛🟩🟩🟩🟩🟩🟩🟩🟩