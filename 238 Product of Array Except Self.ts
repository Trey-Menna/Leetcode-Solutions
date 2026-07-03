//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

//You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums: number[]): number[] {
	const result = new Array(nums.length).fill(1);
	//Use two-pass algorithm
	//Pass 1: Left to right
	let prefix = 1;
	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix;
		prefix *= nums[i];
	}

	//Pass 2: Right to Left
	let suffix = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= suffix;
		suffix *= nums[i];
	}
	return result;
}

// Test case
console.log(productExceptSelf([1, 2, 3, 4]));
// Expected Output: [24, 12, 8, 6]
