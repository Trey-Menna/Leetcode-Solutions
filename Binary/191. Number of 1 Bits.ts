//Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

function hammingWeight(n: number): number {
	let count = 0;

	while(n != 0){
		n = n & (n-1);
		count++;
	}
	return count;
    
};

console.log(hammingWeight(11));
//Should return 3, since The input binary string 1011 has a total of three set bits.
