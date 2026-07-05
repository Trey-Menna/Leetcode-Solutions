/*Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Note that the product of an array with a single element is the value of that element. */
function maxProduct(nums: number[]): number {
	if (nums.length === 0) return 0;

	let maxSub = nums[0];
	let minSub = nums[0];
	let globalMax = nums[0];

	for (let i = 1; i < nums.length; i++) {
		const num = nums[i];

		// Store current max before it gets overwritten
		const tempMax = maxSub;

		// Calculate all three possibilities for the new boundaries
		maxSub = Math.max(num, tempMax * num, minSub * num);
		minSub = Math.min(num, tempMax * num, minSub * num);

		// Update the highest product seen so far
		globalMax = Math.max(globalMax, maxSub);
	}

	return globalMax;
};

console.log(maxProduct([2, 3, -3, 4]));
//Should Log 6 since 2 * 3 is 6

