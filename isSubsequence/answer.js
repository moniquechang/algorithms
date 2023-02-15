/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sArr = s.split('');
  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === sArr[sArr.length - 1]) {
      sArr.pop();
    }
  }
  if (sArr.length === 0) return true;
  return false;
};

// added for commit
isSubsequence();
