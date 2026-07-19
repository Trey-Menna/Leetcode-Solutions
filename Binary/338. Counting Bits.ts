//Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

function countBits(n: number): number[] {
	//Initilize an array with size of n + 1 filled with 0s
	const ans: number[] = new Array(n + 1).fill(0);

	//Compute each bit count for each number based on previous results
	for (let i = 1; i <= n; i++) {
		//ans[1 >> i] shifts bit right (drops last bit)
		// (i & 1) extracts the last bit (adds 1 if odd, 0 if even)\
		ans[i] = ans[i >> 1] + (i & 1);
	}
	return ans;
};

console.log(countBits(2));
//Output should be [0,1,1]
