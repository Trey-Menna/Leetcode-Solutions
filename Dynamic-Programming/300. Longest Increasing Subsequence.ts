//Given an integer array nums, return the length of the longest strictly increasing subsequence.

function lengthOfLIS(nums: number[]): number {
   if(nums.length === 0) return 0;

   //Initilize DP array with 1, as a single element is a subsequence of lenght 1
   const dp: number[] = new Array(nums.length).fill(1);
   let maxLength = 1;

   for(let i = 1; i < nums.length; i++){
	for(let j = 0; j < i; j++){
		if(nums[i] > nums[j]){
			dp[i] = Math.max(dp[i], dp[j] + 1);
		}
	}
	maxLength = Math.max(maxLength, dp[i]);
   }
   return maxLength;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
/*Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.*/
