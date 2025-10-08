function ReturnNumber(spell, potions, success) {
    let end = potions.length - 1, i = Math.floor(end / 2) , start = 0;
    while (start <= end) {
        if (i === 0 && potions[i]*spell >= success) return potions.length;
        else if (i === potions.length - 1 && potions[i]*spell < success) return 0;
        else if (i > 0 && potions[i-1]*spell < success && potions[i]*spell >= success) return potions.length - i;
        else if (i > 0 && potions[i-1]*spell >= success && potions[i]*spell >= success) end = i - 1;
        else start = i + 1;
        i = start + Math.floor((end-start)/2);
    }
    return 0;
}

var successfulPairs = (spells, potions, success) => {
    potions.sort((a, b) => a - b);
    spells = spells.map((x) => {
        return ReturnNumber(x,potions,success)
    })
    return spells;
};

console.log(successfulPairs([1,2,3,4,5,6,7], [1,2,3,4,5,6,7], 25));
console.log(successfulPairs([3,1,2], [8,5,8], 16));