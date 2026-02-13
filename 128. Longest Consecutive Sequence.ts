function longestConsecutive(nums: number[]): number {
//sort array
    nums.sort((a, b) => a - b);
//go through array checking for incremental nums
//declare variables to keep track of current consecutive 
//number, max consecutive number, current number being checked from
//the array, and the size of ghe array
    var consecutive : number = 1;
    var maxCon : number = 1;
    var current: number = nums[0]; 
    var size: number = nums.length
//check edge case if array is empty
    if(size == 0){
      return 0}
//need to use maxCon in first part of of statment
//loop through array checking if the next number is a consecutive
//number 
    for ( var i = 0; i < size; i++){
       if (nums[i] == current + 1){
          current = nums[i];
           consecutive++;
           //another edge case
           if(i == size && consecutive > maxCon){return consecutive;}
       } 
//if not a consecutive number restart tally
       else{
       current = nums[i];
       maxCon = consecutive;
       consecutive = 0;
      }
    }
    return maxCon;
};