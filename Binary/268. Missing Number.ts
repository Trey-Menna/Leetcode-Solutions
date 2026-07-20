//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
function missingNumber(nums: number[]): number {
   let missing = nums.length;

   for(let i = 0; i < nums.length; i++){
	missing ^= i ^ nums[i];
   }
   return missing;
};

console.log(missingNumber([3,0,1]));
// Output 2, n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
