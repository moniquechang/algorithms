function solution(statues) {
  let max = statues[0];
  let min = statues[0];
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] > max) {
      max = statues[i];
    } else if (statues[i] < min) {
      min = statues[i];
    }
  }
  const totalStatues = max - min + 1;
  const neededStatues = totalStatues - statues.length;
  return neededStatues;
}

// added for commit
solution();
