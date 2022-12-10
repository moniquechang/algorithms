/**
 * @param {number[][]} accounts
 * @return {number}
 */

/* commented out for commit

var maximumWealth = function (accounts) {
  let maxAmount = 0;
  accounts.map(account => {
    const amount = account.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (amount > maxAmount) {
      maxAmount = amount;
    }
  });
  return maxAmount;
};
*/
