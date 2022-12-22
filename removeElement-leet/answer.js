/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* this method is slightly less efficient than method below

var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
*/

var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// added for commit
removeElement();
