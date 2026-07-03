
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums: number[]): boolean {
	//Declared Variables
	let numMap: Map<number, number> = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (numMap.has(nums[i])) {
			return true;
		}
		else {
			numMap.set(nums[i], i);
		}
	}
	return false;
};
