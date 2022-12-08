/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    count++;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
  }
  return count;
};

// added for commit
numberOfSteps();
