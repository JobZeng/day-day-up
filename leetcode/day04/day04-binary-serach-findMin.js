let findMin = function (nums = []) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < nums[high]) {
      high = mid;
    }
    // 中间的数字大于最右边的数字，那么中间的数字不可能是最小值，就可以排除中间。
    else {
      low = mid + 1;
    }
  }
  return nums[low];
};
let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
