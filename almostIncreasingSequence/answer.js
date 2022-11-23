function solution(sequence) {
  let countA = 0;
  let countB = 0;
  const sequence2 = sequence.map(num => num);
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      sequence.splice(i + 1, 1);
      countA++;
      i = -1;
    }
  }
  for (let k = 0; k < sequence2.length; k++) {
    if (sequence2[k] >= sequence2[k + 1]) {
      sequence2.splice(k, 1);
      countB++;
      k = -1;
    }
  }
  if (countA > 1 && countB > 1) {
    return false;
  } else {
    return true;
  }
}

// added for commit
solution();
