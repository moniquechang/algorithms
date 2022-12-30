/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    } else if (target > nums[nums.length - 1]) {
      return nums.length;
    } else if (target < nums[0]) {
      return 0;
    }
  }
};

// added for commit
searchInsert();
