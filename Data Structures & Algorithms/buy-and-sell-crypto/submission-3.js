class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // prices = [10,1,5,6,7,1]
    // prices = [10,8,7,5,2]
    maxProfit(prices) {
        // left -> day we buy 
        // right -> day we sell
        let left = 0
        let right = 1 
        let maxProfit = 0 

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                maxProfit = Math.max(maxProfit, profit)
            } else {
                left = right
            }
            right++
        }

        return maxProfit
    }
}
