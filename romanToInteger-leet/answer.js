/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && s[i + 1] === 'V') {
      value += 4;
      i++;
    } else if (s[i] === 'I' && s[i + 1] === 'X') {
      value += 9;
      i++;
    } else if (s[i] === 'X' && s[i + 1] === 'L') {
      value += 40;
      i++;
    } else if (s[i] === 'X' && s[i + 1] === 'C') {
      value += 90;
      i++;
    } else if (s[i] === 'C' && s[i + 1] === 'D') {
      value += 400;
      i++;
    } else if (s[i] === 'C' && s[i + 1] === 'M') {
      value += 900;
      i++;
    } else {
      if (s[i] === 'I') {
        value += 1;
      } else if (s[i] === 'V') {
        value += 5;
      } else if (s[i] === 'X') {
        value += 10;
      } else if (s[i] === 'L') {
        value += 50;
      } else if (s[i] === 'C') {
        value += 100;
      } else if (s[i] === 'D') {
        value += 500;
      } else if (s[i] === 'M') {
        value += 1000;
      }
    }
  }
  return value;
};

// added for commit
romanToInt();
