/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (i !== k && nums[i] + nums[k] === target) {
        result.push(i, k);
        return result;
      }
    }
  }
};

// added for commit
twoSum();
