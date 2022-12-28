/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      bracketArr.push(')');
    } else if (s[i] === '[') {
      bracketArr.push(']');
    } else if (s[i] === '{') {
      bracketArr.push('}');
    } else {
      if (s[i] === bracketArr[bracketArr.length - 1]) {
        bracketArr.pop();
      } else {
        return false;
      }
    }
  }
  if (bracketArr.length !== 0) {
    return false;
  } else {
    return true;
  }
};

// added for commit
isValid();
