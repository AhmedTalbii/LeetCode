var removeAnagrams = function(words) {
    const result = [];
    let word1 = "";
    for (let w of words) {
        let word2 = w.split('').sort().join('');
        if (word1 !== word2) {
            result.push(w);
            word1 = word2;
        }
    }
    return result;
};


console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));