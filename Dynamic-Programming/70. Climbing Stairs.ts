//You are climbing a staircase. It takes n steps to reach the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
	//Edge case if n is 1 or 2, result equals n 
	if (n <= 2) {
		return n;
	}

	//Initilize Tracking Variables
	let prev2: number = 1;
	let prev1: number = 2;
	let current: number = 0;

	//Iteratively compute ways for subsequent steps up to n 
	for (let i = 3; i <= n; i++) {
		current = prev1 + prev2;
		prev2 = prev1;
		prev1 = current;
	}

	return current;
};

console.log(climbStairs(2))
//output: 2 
/*Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps*/
