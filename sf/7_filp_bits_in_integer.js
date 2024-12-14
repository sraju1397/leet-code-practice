/*

You will be given a list of 32-bit unsigned integers.
Flip all the bits ( and ) and return the result as an unsigned integer.

 */

function flipBits(n) {
  return (~n >>> 0) ;
}


const n = 2147483647; // 32-bit: 01111111111111111111111111111111
console.log(flipBits(n));


console.log(flipBits(2147483647)); // Output: 2147483648
console.log(flipBits(1));          // Output: 4294967294
console.log(flipBits(0));          // Output: 4294967295
