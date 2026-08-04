/*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.*/

function rob(nums: number[]): number {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];

  //Helper function for linear House Robber (House Robber 1)
  const robLinear = (arr: number[]): number => {
	let prevMax = 0;
	let currMax = 0;

	for(const nums of arr){
		let temp = Math.max(currMax, prevMax + nums);
		prevMax = currMax;
		currMax = temp;
	}

	return currMax;
  };

  //Case 1: Exclude last house the last house (from index 0 to length - 2)
  const case1 = robLinear(nums.slice(0, nums.length -1));
  //Case 2: Exclude First House (from index 1 to length - 1)
  const case2 = robLinear(nums.slice(1));

  return Math.max(case1,case2);
};

console.log(rob([2,3,2]));
/*Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.*
