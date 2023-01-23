/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const str = '';
  // s.map(char => str += char);         only commenting out this line for commit
  s.splice(0, s.length);
  for (let i = str.length - 1; i >= 0; i--) {
    s.push(str[i]);
  }
};

// added for commit
reverseString();
