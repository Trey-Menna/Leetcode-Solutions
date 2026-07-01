//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
	const profit = 0;
	const minPrice = Infinity;
	//Loop through array use hashmap to check the keys if there is profit
	for(let i = 0; i < prices.length; i++){
		//Update with lowest price we have seen so far
		if(prices[i] < minPrice){
		minPrice = prices[i];
		}

		//If selling by today gives better profit
		else if(prices[i] - minPrice > profit){
			profit = prices[i] - minPrice;
		}
	}
	return profit;
};
