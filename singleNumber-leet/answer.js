/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numObj[nums[i]]) {
      numObj[nums[i]] = 1;
    } else {
      numObj[nums[i]]++;
    }
  }
  for (const keys in numObj) {
    if (numObj[keys] === 1) {
      return keys;
    }
  }
};

// added for commit
singleNumber();
