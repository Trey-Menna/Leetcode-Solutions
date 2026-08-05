/*You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

For example, "11106" can be decoded into:

"AAJF" with the grouping (1, 1, 10, 6)
"KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
Note: there may be strings that are impossible to decode.

Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

The test cases are generated so that the answer fits in a 32-bit integer.*/

function numDecodings(s: string): number {
    // An empty string or a string with a leading zero cannot be decoded
    if (!s || s[0] === '0') {
        return 0;
    }

    const n = s.length;
    
    // dp1 represents dp[i-1], dp2 represents dp[i-2]
    let dp2 = 1; // Base case for empty string matching
    let dp1 = 1; // Base case for single valid character

    for (let i = 1; i < n; i++) {
        let current = 0;
        
        // Check if the single digit s[i] is valid (1-9)
        if (s[i] !== '0') {
            current += dp1;
        }
        
        // Check if the two-digit combination s[i-1]s[i] is valid (10-26)
        const twoDigit = parseInt(s.substring(i - 1, i + 1), 10);
        if (twoDigit >= 10 && twoDigit <= 26) {
            current += dp2;
        }
        
        // Update states for the next iteration
        dp2 = dp1;
        dp1 = current;
    }

    return dp1;	
    
};

console.log(numDecodings("12"));
/*Input: s = "12"

Output: 2

Explanation:

"12" could be decoded as "AB" (1 2) or "L" (12).*/
