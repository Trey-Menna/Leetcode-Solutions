/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/
function twoSum(nums: number[], target: number): number[] {
	//initilize variables 
	let hashmap: Map<string>, number> = new Map();
	//Loop through array and set values to hashmap
	for (let i = 0; i < nums.length; i++){
		let complement = target - nums[i];
		if(hashmap.has(complement)){
			return [hashmap.get(complement), i];
		}
		hashmap.set(nums[i], i);
	}
	return [];

};
