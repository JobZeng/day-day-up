const search = function (nums, target) {
  let length = nums.length;
  // 处理边界情况
  if (length === 0) {
    return -1;
  }
  if (length === 1) {
    target === nums[0] ? 0 : -1;
  }

  let l = 0, r = length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // 左边是有序数组
    if (nums[0] <= nums[mid]) {
      // 要找的元素在左半边
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      }
      // 要找的元素在右半边
      else {
        l = mid + 1;
      }
    }
    // 在右边
    else {
      // 在左边
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;

      } else {
        r = mid - 1;
      }
    }
  }
  return -1;

};

// test
let nums = [4, 5, 6, 7, 0, 1, 2], target = 0
console.log(search(nums, target));
