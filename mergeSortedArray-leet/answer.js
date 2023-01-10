/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.map(num => {
    // added 'return' keyword below for commit purposes, real solution doesn't include 'return' keyword
    return nums1.push(num);
  });
  nums1.sort((a, b) => {
    return a - b;
  });
};

// added for commit
merge();
