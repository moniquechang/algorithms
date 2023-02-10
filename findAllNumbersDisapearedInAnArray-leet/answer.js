/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const resultArr = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      resultArr.push(i);
    }
  }
  return resultArr;
};

// added for commit
findDisappearedNumbers();
