var triangularSum = function(nums) {
    while (nums.length > 1) {
        let nArr = []
        for (let i = 1; i < nums.length; i++) {
            nArr.push(parseInt(String(nums[i-1])[String(nums[i-1]).length-1])+parseInt(String(nums[i])[String(nums[i]).length-1]))
        }
        nums = nArr
    }
    if (String(nums[0]).length > 1) return parseInt(String(nums[0])[String(nums[0]).length-1])
    return nums[0]
};