// prices = [7 1 5 3 6 4]
// maxProfit = 5


function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  let maxPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      maxPrice = prices[i];
    } else if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }

    if (maxPrice - minPrice > maxProfit) {
      maxProfit = maxPrice - minPrice;
    }
  }

  return maxProfit;
}
