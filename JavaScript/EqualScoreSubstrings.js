var scoreBalance = function(s) {
    const n = s.length;
    for (let i = 0; i < n - 1; i++) {
        let lS = 0;
        let rS = 0;
        for (let j = 0; j <= i; j++) {
            lS += s.charCodeAt(j) - 'a'.charCodeAt(0) + 1;
        }
        for (let j = i + 1; j < n; j++) {
            rS += s.charCodeAt(j) - 'a'.charCodeAt(0) + 1;
        }
        if (lS === rS) return true;
    }
    return false;
};