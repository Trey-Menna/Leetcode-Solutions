/* Suppose an array of length n sorted in ascending order is rotated between 2 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time. */

function findMin(nums: number[]): number {
	let left = 0;
	let right = nums.length - 1;

	while(left < right){
		const mid = Math.floor((left+right)/2);

		//If mid is greater than right, min must be to the right of mid
		if(nums[mid] > nums[right]){
		left  = mid + 1;
		}
		else{
			//If mid is less than or equal to right, this min is either mid or to its left
			right = mid;
		} 
	}
	//Left and right will converge at min
	return nums[left];

};

console.log(findMin([3,4,5,1,2]));
//Should Log 1, Since the original array was [1,2,3,4,5] rotated 3 times
