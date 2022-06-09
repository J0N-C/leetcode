/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let largestProfit = 0;
  let highPrice = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    if (highPrice < prices[i]) {
      highPrice = prices[i];
      continue;
    }
    if (highPrice - prices[i] > largestProfit) {
      largestProfit = highPrice - prices[i];
    }
  }
  return largestProfit;
};
