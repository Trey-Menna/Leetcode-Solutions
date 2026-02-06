function longestConsecutive(nums: number[]): number {
//sort array
    nums.sort((a, b) => a - b);
//go through array checking for incremental nums
    var consecutive : number = 1;
    var current: number = nums[0]; 
    var size: number = nums.length
    for ( var i = 0; i < size; i++){
       if (nums[i]> current){
          current = nums[i];
           consecutive++;
       } 
    }
    return consecutive;
};