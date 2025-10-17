function maxPartitionsAfterOperations(s, k) {
    const n = s.length;
    if (k === 26) return 1;

    const p1 = Array(n).fill(0), m1 = Array(n).fill(0);
    const p2 = Array(n).fill(0), m2 = Array(n).fill(0);

    let p = 1, m = 0;
    for (let i = 0; i < n; i++) {
        const cm = 1 << (s.charCodeAt(i) - 97);
        if (popcount(m | cm) > k) { p++; m = cm; }
        else m |= cm;
        p1[i] = p; m1[i] = m;
    }

    p = 1; m = 0;
    for (let i = n-1; i >= 0; i--) {
        const cm = 1 << (s.charCodeAt(i) - 97);
        if (popcount(m | cm) > k) { p++; m = cm; }
        else m |= cm;
        p2[i] = p; m2[i] = m;
    }

    let ans = p2[0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            const ncm = 1 << j;
            const [pb, mb] = i ? [p1[i-1], m1[i-1]] : [0,0];
            const [pa, ma] = i+1<n ? [p2[i+1], m2[i+1]] : [0,0];

            let cp, cmask;
            if (i === 0) { cp = 1; cmask = ncm; }
            else if (popcount(mb | ncm) > k) { cp = pb + 1; cmask = ncm; }
            else { cp = pb; cmask = mb | ncm; }

            let t = cp + pa;
            if (pa && popcount(cmask | ma) <= k) t--;
            ans = Math.max(ans, t);
        }
    }
    return ans;

    function popcount(x) { return x.toString(2).split('1').length-1; }
}