var findSmallestInteger = function(nums, value) {
    const remainderCount = new Array(value).fill(0);
    
    // this for is equivilant to 
    for (const num of nums) remainderCount[(num%value+value)%value]++;
    // for (const num of nums) {
    //     let reminder = num % value
    //     if (reminder < 0) reminder += value
    //     remainderCount[reminder]++
    // };
    let minCount = Math.min(...remainderCount);
    let minIndex = remainderCount.indexOf(minCount);
    
    return value * minCount + minIndex;
};
