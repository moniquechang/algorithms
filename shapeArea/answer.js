function solution(n) {
  const longestRow = (n * 2) - 1;
  let area = 0;
  for (let i = longestRow; i >= 1; i--) {
    area += i;
    i--;
  }
  const finalArea = (area * 2) - longestRow;
  return finalArea;
}

// added for commit
solution();
