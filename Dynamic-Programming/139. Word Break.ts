/*Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.*/

function wordBreak(s: string, wordDict: string[]): boolean {
   //Array to track if a substring from index 0 to i can be segmented
   const dp: boolean[] = new Array(s.length + 1).fill(false);

   //Base case: an empty string can always be segmented
   dp[0] = true;

   //Convert to a Set for O(1) Lookups checking all substrings
   const wordSet =  new Set(wordDict);

   for(let i = 1; i <= s.length; i++){
	for(let j = 0; j < i; j++){
		//If the prefix s[0...j] is valid and s[j...i] is int the dictionary
		if(dp[j] && wordSet.has(s.slice(j,i))){
			dp[i] = true;
			break; //move to next index early
		}
	}	
   }
   return dp[s.length];
};

console.log(wordBreak("leetcode",["leet","code"]));
/*Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".*/
