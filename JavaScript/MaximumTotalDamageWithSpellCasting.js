// var maximumTotalDamage = function (power) {
//     power.sort((a, b) => a - b)
//     let cnt = new Map(), res = 0;
//     for (const x of power) cnt.set(x, (cnt.get(x) || 0) + 1);
//     cnt = Array.from(cnt.entries());
//     for (i = cnt.length - 2; i >= 0; i--) {
//         if (cnt[i + 1][0] - cnt[i][0] <= 2 && cnt[i + 1][0] - cnt[i][0] !== 0 && ((cnt[i + 1][0] * cnt[i + 1][1]) > (cnt[i][0] * cnt[i][1]))) {
//             cnt.splice(i, 1);
//             i--;
//         } else if (cnt[i + 1][0] - cnt[i][0] <= 2 && cnt[i + 1][0] - cnt[i][0] !== 0 && ((cnt[i + 1][0] * cnt[i + 1][1]) < (cnt[i][0] * cnt[i][1]))) {
//             cnt.splice(i+1, 1);
//             continue;
//         }
//     }
//     for (let [v, c] of cnt) res += v * c;
//     return res;
// };

var maximumTotalDamage = function(power) {
    const cnt = new Map();
    for (const x of power) cnt.set(x, (cnt.get(x)||0)+1);
    const vals = Array.from(cnt.keys()).sort((a,b)=>a-b);
    const sums = vals.map(v => v*cnt.get(v));
    const n = vals.length;
    if(n===0) return 0;
    const dp = Array(n).fill(0);
    dp[0] = sums[0];
    for(let i=1;i<n;i++){
        let take = sums[i];
        let j=i-1;
        while(j>=0 && vals[j]>vals[i]-3) j--;
        if(j>=0) take+=dp[j];
        dp[i]=Math.max(dp[i-1], take);
    }
    return dp[n-1];
};

console.log(maximumTotalDamage([7,1,6,6])); // 13
console.log(maximumTotalDamage([1,1,3,4])); // 6