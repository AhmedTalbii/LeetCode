'use state';

var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let nArr = [];
    for (let i = 1 ; i < nums.length ; i++) {
        if ((nums[i-1] ^ nums[i]) === 0) {
            nArr.push(nums[i]);
            nums.splice(i-1,2);
            i--;
        } else {
            nArr.forEach((e)=>{
              if ((nums[i-1] ^ e) === 0) {
                nums.splice(i-1,1);
                i--;
              } else if ((nums[i] ^ e) === 0) {
                nums.splice(i,1);
                i--;
              }
            })
        }
    }
    // nArr.forEach((e,i)=>{
    //     console.log(e,i)
    // })
    return singleNumber(nums);
};

console.log(singleNumber([0,1,0,1,0,1,99]));