var reverseString = function(s) {
    function rec(i) {
        if (i < s.length/2) {
            return s
        }
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]];
        return rec(i-1)
    }
    return rec(s.length-1)
};

console.log(reverseString(["H","e","l","l","o","h"]));
