function longestConsecutive(nums: number[]): number {
//sort array
    nums.sort((a, b) => a - b);
//go through array checking for incremental nums
    var consecutive : number = 0;
    var current: number = nums[0]; 
    for ( var i: number in nums){
       if (i > current){
          current = i;
           consecutive++;
       } 
    }
    return consecutive;
};