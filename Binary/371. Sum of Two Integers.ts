//Given two integers a and b, return the sum of the two integers without using the operators + and -

function getSum(a: number, b: number): number {
	//Gotta use bitwise operators
	while(b != 0){
		//Calc the carry bits 
		let carry = (a & b) << 1;

		//Add bits without carrying
		a = a^b;

		//Assign the carry to b for the next iteration
		b = carry;
	}
	return a;
	
};

console.log(getSum(1,2));
//Should be 3:
