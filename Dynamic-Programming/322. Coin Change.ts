/*You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.*/

function coinChange(coins: number[], amount: number): number {
	//Initilize DP Array with amount +1, representing an unreachable state
	const dp: number[] = new Array(amount + 1).fill(amount + 1);

	//Base case: 0 coins are need to make an amount of 0
	dp[0] = 0;

	//build the DP table from 1 up to target amount
	for (let i = 0; i <= amount; i++) {
		for (const coin of coins) {
			//Check if the coin denomination can fit into the current amount
			if (i - coin >= 0) {
				//Update minimum coins needed for the current amount
				dp[i] = Math.min(dp[i], dp[i - coin] + 1);
			}
		}
	}
	// If the value hasn't changed, the amount cannot be formed
	return dp[amount] > amount ? -1 : dp[amount];

};

console.log([1, 2, 5], 11);
//Output 3
//11 = 5 + 5 + 1
