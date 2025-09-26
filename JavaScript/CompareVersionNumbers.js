var compareVersion = function(version1, version2) {
    console.log(version1, version2);
    console.log(Math.round(version1-0), Math.round(version2-0));
    console.log(version1, version2);
    if ((version1-0) > (version2-0)) return 1
    if ((version2-0) > (version1-0)) return -1
    return 0
};

console.log(compareVersion("1.0.1", "1"));