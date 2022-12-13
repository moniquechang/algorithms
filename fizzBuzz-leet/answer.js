/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const finalArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finalArr.push('FizzBuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
      finalArr.push('Fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
      finalArr.push('Buzz');
    } else {
      finalArr.push(i.toString());
    }
  }
  return finalArr;
};

// added for commit
fizzBuzz();
