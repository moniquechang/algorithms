function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== inputString[inputString.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}

// added for commit
solution();
