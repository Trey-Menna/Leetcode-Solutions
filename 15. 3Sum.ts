/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

function threeSum(nums: number[]): number[][] {
   let result: number[][] = [];
   //Sort array in ascending numerical using built in sort function
   nums.sort((a,b) => a - b);

   for(let i = 0; i < nums.length - 2; i++){
	//Optimization if current anchor is greater than 0, no triplest can sum up to 0
	if(nums[i] > 0) break;

	//Skip duplicate values for the first element to ensure triplets
	if(i > 0 && nums[i] == nums[i - 1]) continue;

	let left = i + 1;
	let right = nums.length - 1;

	//Two-pointer search for the remaining two elements
	while(left < right){
		const sum = nums[i] + nums[left] + nums[right];

		if(sum == 0){
			result.push([nums[i] , nums[left] , nums[right]]);

			//Move pointers inward
			left ++;
			right --;

			//Skip duplicate values for the left pointer
			while (left < right && nums[left] == nums[left - 1]) left++;
			//Skip duplicate values for the right pointers
			while (left < right && nums[right] == nums[right + 1]) right++;
		}
		else if(sum < 0){
			left++; //Sum to small, move left pointer to increase value
		}
		else{
			right--; //Sum to large, move right pointer to decrease value
		}
	}
   }
   return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
//Expected output is [[-1,-1,2],[-1,0,1]]
/* nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.*/
