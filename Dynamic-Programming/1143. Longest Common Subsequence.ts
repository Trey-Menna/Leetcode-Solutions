/*Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.*/

function longestCommonSubsequence(text1: string, text2: string): number {
   const m = text1.length;
   const n = text2.length;

   //Create an (m + 1) x (n + 1) DP table initialized with 0
   const dp: number[][] = Array.from({length: m + 1}, ()=> new Array(n + 1).fill(0));

   /*Iterate through both strings using a nested loop. If the current characters match, add 1 to the diagonal top-left value. 
   If they do not match, take the maximum value between the cell above and the cell to the left.*/
   for(let i = 1; i <= m; i++){
	for(let j = 1; j <= n; j++){
		if(text1[i - 1] === text2[j -1]){
			//Characters match: take diagonal value + 1
			dp[i][j] = dp[i -1][j-1] + 1
		}
		else{
			//Characters mismatch: take max of top or left neighbor
			dp[i][j] = Math.max(dp[i -1][j], dp[i][j - 1]);
		}
	}
   }
   return dp[m][n]
};

console.log(longestCommonSubsequence("abcde", "ace"));
/*Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.*/
