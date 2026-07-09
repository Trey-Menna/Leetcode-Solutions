/*You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.*/

function maxArea(height: number[]): number {
	let maxWater = 0;
	//use two pointer search
	let left = 0;
	let right = height.length -1;

	while(left < right){
		//Calc the width
		let width = right - left;

		//Calc the height
		let y = Math.min(height[left], height[right]);

		//Calc area and update maxWater if it is larger
		let area =  y * width;
		maxWater = Math.max(maxWater, area);

		//Move pointer to the shorter line 
		if(height[left] < height[right]){
			left++;
		} else {
			right--;
		}
	}
	return maxWater;
    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
/*Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.*/

/*The area is bound by the shorter line. If you move the taller line inward, the width decreases, and the height can still never exceed the original short line. Therefore, moving the taller line can only result in a smaller area. Moving the shorter line is the only way you might find a taller boundary that compensates for the loss in width*/

//Time complexity O(n), since it searches the whole array once
//Space complexity = O(1) no extra memory allocated; only a couple pointers are stored
