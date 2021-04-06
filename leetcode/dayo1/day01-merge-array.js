// 双指针
const merge1 = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    // nums1[i] > nums2[j]
    if(nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // while has nums2
  while(j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  console.log(nums1);
};

const merge2 = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.lenght - m, ...nums2);
  nums1.sort()
} 
let nums1 = [0];
let nums2 = [2, 5, 6];
merge(nums1, 0, nums2, 3);
