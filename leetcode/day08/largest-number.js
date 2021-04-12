const largestNumber = function(nums = []) {
  nums.sort(function(a, b) {
    let str1 = `${a}${b}`;
    let str2 = `${b}${a}`;
    return str2 - str1;
  })
  return nums[0] === 0 ? nums.splice(0,1).join('') : nums.join('')
};
let nums = [0,0,0,0,0];
console.log(largestNumber(nums));