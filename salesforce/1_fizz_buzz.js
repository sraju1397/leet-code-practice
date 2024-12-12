//  given a number n, for each integer i in the range  1 to n, inclusive
// print one of the value as per line follws
// if i is a multiple of both 3 and 5 print FizzBuzz
// if i is a multiple of 3 print Fizz
// if i is a multiple of 5 print Buzz
// if i not a multiple of 3 or 5 print i

function printFizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
