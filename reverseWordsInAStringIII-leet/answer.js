/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reverseS = '';
  let finalS = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reverseS += s[i];
  }
  const sArr = reverseS.split(' ');
  for (let k = sArr.length - 1; k >= 0; k--) {
    finalS += sArr[k];
    finalS += ' ';
  }
  return finalS.trim();
};

// added for commit
reverseWords();
