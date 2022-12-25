/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let stringNum = x.toString();
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum.length === 1) {
      return true;
    } else if (stringNum[i] !== stringNum[stringNum.length - 1]) {
      return false;
    } else if (stringNum[i] === stringNum[stringNum.length - 1]) {
      stringNum = stringNum.slice(i + 1, stringNum.length - 1);
      i = -1;
    }
  }
  return true;
};

// added for commit
isPalindrome();
