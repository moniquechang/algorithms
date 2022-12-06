/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    for (let k = 0; k < magazine.length; k++) {
      if (ransomNote[i] === magazine[k]) {
        ransomNote.replace(ransomNote[i], '');
        magazine.replace(magazine[k], '');
        k = magazine.length;
        i = -1;
      }
    }
  }
  if (ransomNote.length === 0) {
    return true;
  } else {
    return false;
  }
};

// added for commit
canConstruct();
