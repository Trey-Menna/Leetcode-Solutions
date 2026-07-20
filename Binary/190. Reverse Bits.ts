//Reverse bits of a given 32 bits signed integer.
function reverseBits(n: number): number {
	let result = 0;
	for (let i = 0; i < 32; i++) {
		result = (result << 1) | (n & 1);
		n >>= 1;
	}
	return result >>> 0;

};

console.log(reverseBits(43261596));
/* Output: 964176192
Integer	Binary
43261596	00000010100101000001111010011100
964176192	00111001011110000010100101000000 */
