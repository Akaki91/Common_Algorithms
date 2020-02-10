// Given a 32 - bit signed integer, reverse digits of an integer.

//     Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



var reverse = function (x) {
    var str = x.toString();
    var num = ''

    for (let i = str.length - 1; i > -1; i--) {
        num += str[i]
    }

    if (num[num.length - 1] === '-') {
        num = num[num.length - 1] + num.slice(0, num.length - 1)
    }
    
    
    return Number(num)
}


console.log(reverse(123));
console.log(reverse(-123))
console.log(reverse(4924902940249075878394309495093978249872364236452673478273424792347923029098402984927465467869289287929898782782427642874284792874928657248749868749258237123842614746592809823091320989483749287123))

