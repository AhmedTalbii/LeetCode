var search = function (nums, target) {
    let len = nums.length-1; i = Math.floor(len / 2); start = 0; end = len;
    while (start <= end) {
        if (nums[i] > target) {
            end = i - 1;
        } else if (nums[i] < target) {
            start = i + 1;
        } else {
            return i;
        }
        i = start + Math.floor((end-start) / 2)
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 13));