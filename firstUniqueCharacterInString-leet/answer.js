/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charObj = {};
  const indexArr = [];
  for (let i = 0; i < s.length; i++) {
    if (!charObj[s[i]]) {
      charObj[s[i]] = 1;
    } else {
      charObj[s[i]]++;
    }
  }
  for (const keys in charObj) {
    if (charObj[keys] === 1) {
      indexArr.push(s.indexOf(keys));
    }
  }
  if (indexArr[0] === undefined) return -1;
  return Math.min(...indexArr);
};

// added for commit
firstUniqChar();
