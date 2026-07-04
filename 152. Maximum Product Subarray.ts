/*Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Note that the product of an array with a single element is the value of that element. */
function maxProduct(nums: number[]): number {
 	let maxSub = -Infinity;
	let currentSub = 0;
	for(let i =0; i < nums.length; i++){
		currentSub = Math.max((currentSub * nums[i]), nums[i]);
		if(currentSub > maxSub){
			maxSub = currentSub;
		}
		else if(currentSub < 0){
			currentSub = 0;
		}
	}
	return maxSub;
};

console.log(maxProduct([2,3,-3,4]));
//Should Log 6 since 2 * 3 is 6

