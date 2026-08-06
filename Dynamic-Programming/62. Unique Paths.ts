/*There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.*/

function uniquePaths(m: number, n: number): number {
   // Initilize an array of size n with 1s representing the top row
   const row: number[] = new Array(n).fill(1);

   // Iterate through each row starting from second row (index 1)
   for(let i = 1; i < m; i++){
	//Update each column value from left to right 
	for(let j = 1; j < n; j++){
		row[j] += row[j-1];
	}
   }
   // The last element represents the bottom-right corner 
   return row[n - 1];
};

console.log(uniquePaths(3,7));
/*Input: m = 3, n = 7
Output: 28*/
