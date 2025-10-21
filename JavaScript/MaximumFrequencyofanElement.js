function maxFrequency(nums, k, numOperations) {
  const diff = {}, freq = {};
  let maxNum = 0, overlap = 0, best = 0;

  for (const num of nums) {
    const s = Math.max(0, num - k), e = Math.min(100001, num + k + 1);
    diff[s] = (diff[s] || 0) + 1;
    diff[e] = (diff[e] || 0) - 1;
    freq[num] = (freq[num] || 0) + 1;
    maxNum = Math.max(maxNum, num);
  }

  for (let i = 0; i <= maxNum; i++) {
    overlap += diff[i] || 0;
    const c = freq[i] || 0;
    best = Math.max(best, c + Math.min(overlap - c, numOperations));
  }

  return best;
}
