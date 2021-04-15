const rob = function (nums) {
  let length = nums.length;
  if (length === 0) {
    return;
  }
  let tmpNumbers = [];
  tmpNumbers[0] = nums[0];
  tmpNumbers[1] = Math.max(nums[0], nums[1]);
  for (let i = 0; i < length; i++) {
    dp[i] = Math.max(d[i - 2] + nums[i], d[i - 1]);
  }
  return dp[length - 1];
};
let numbers = [1, 3, 5];
let sum = rob(numbers);
console.log(sum);