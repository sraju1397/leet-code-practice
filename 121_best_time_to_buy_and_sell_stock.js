/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var max = 0;
  var minPrice = prices[0];

  for (i = 0; i < prices.length; i++) {
    var price = prices[i];
    var profit = price - minPrice;

    max = Math.max(profit, max);
    minPrice = Math.min(price, minPrice);
  }

  return max;

}