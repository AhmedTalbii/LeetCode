var majorityFrequencyGroup = function(s) {
    let mp = new Map()
    for (let v of s) {
        if (mp.get(v)) mp.set(v, mp.get(v)+1)
        else mp.set(v, 1)
    }
    let arrGroups = new Map()
    for (let [char, v] of mp) {
        let gt = arrGroups.get(v)
        if (typeof gt !== "undefined"){
            gt.push(char);
        }
        else arrGroups.set(v, [char])
    }
    let bK = 0,bG = []
    for ([k, chars] of arrGroups) {
        if (chars.length > bG.length || (chars.length === bG.length && k > bK)) {
            bG = chars;
            bK = k
        }
    }
    return bG.join("")
};

console.log(majorityFrequencyGroup("aaabbbccccdddde"))
console.log(majorityFrequencyGroup("abcd"))
console.log(majorityFrequencyGroup("asrhyrmzhcehcydmrmce"))