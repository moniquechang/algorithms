/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase();
  paragraph = paragraph.replace(/[^\w\s]|_/g, ' ').replace(/\s+/g, ' ').trim();
  const paragraphArr = paragraph.split(' ');
  const wordObj = {};
  for (let i = 0; i < paragraphArr.length; i++) {
    if (!banned.includes(paragraphArr[i])) {
      if (!wordObj[paragraphArr[i]]) {
        wordObj[paragraphArr[i]] = 1;
      } else if (wordObj[paragraphArr[i]]) {
        wordObj[paragraphArr[i]]++;
      }
    }
  }
  const result = [0];
  for (const keys in wordObj) {
    if (wordObj[keys] > result[0]) {
      result[0] = wordObj[keys];
      result[1] = keys;
    }
  }
  return result[1];
};

// added for commit
mostCommonWord();
