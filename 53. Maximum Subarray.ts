//Given an integer array nums, find the subarray with the largest sum, and return its sum.

//A subarray is a contiguous non-empty sequence of elements within an array.

function maxSubArray(nums: number[]): number {
	let maxSub = -Infinity; //Why did Infinity help with arrays with only negative numbers
	let currentSub = 0;
	for (let i = 0; i < nums.length; i++) {
		currentSub = Math.max((currentSub + nums[i]), nums[i]);
		if (currentSub > maxSub) {
			maxSub = currentSub;
		}
		else if (currentSub < 0) {
			currentSub = 0;
		}
	}
	return maxSub;
}
// Test with expected output of 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
