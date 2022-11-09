function solution(inputArray) {
  let greatestProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > greatestProduct) {
      greatestProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return greatestProduct;
}

// added for commit
solution();
