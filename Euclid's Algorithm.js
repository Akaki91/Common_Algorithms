

function gcd (m, n) {
    var result = 0;
    var r = m % n;
    if (r === 0) {
        result = n
        return result
    }
    else return gcd (n, r) 

}


console.log(gcd(26, 13) );
console.log(gcd(12, 8));
console.log(gcd(234, 64));
console.log(gcd(17, 9));

console.log(gcd(15, 9));
console.log(gcd(-15, 9));

console.log(gcd(9, 15))
console.log(gcd(8, 8));