/*Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.*/

function combinationSum4(nums: number[], target: number): number {
   // dp[i] will store the number of combinations that sum up to i 
   const dp: number[] = new Array(target + 1).fill(0);

   //Base case: There is 1 way to make the sum 0 (empty array)
   dp[0] = 1;

   // Fill the dp array iteratively from 1 up to target
   for(let i = 1; i <= target; i++){
	for(const num of nums){
		if(i >= num){
			dp[i] += dp[i- num];
		}
	}
   }
   return dp[target];
};

console.log(combinationSum4([1,2,3],4));
/*Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.*/
