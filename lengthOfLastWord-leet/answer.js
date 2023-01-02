/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  const wordArr = s.split(' ');
  const lastWord = wordArr[wordArr.length - 1];
  const lastWordLength = lastWord.length;
  return lastWordLength;
};

// added for commit
lengthOfLastWord();
