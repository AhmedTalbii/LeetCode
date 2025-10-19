function findLexSmallestString(s, a, b) {
  const seen = new Set();
  let res = s;

  function dfs(curr) {
    if (seen.has(curr)) return;
    seen.add(curr);
    if (curr < res) res = curr;

    let arr = curr.split('');
    for (let i = 1; i < arr.length; i += 2)
      arr[i] = ((+arr[i] + a) % 10).toString();
    dfs(arr.join(''));

    dfs(curr.slice(-b) + curr.slice(0, -b));
  }

  dfs(s);
  return res;
}