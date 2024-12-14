/*
here are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

There will be  queries consisting of , and .
For each query, return YES if some permutation ,
 satisfying the relation exists. Otherwise, return NO.

 */

function twoArrays(k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // Output: YES
console.log(twoArrays(5, [1, 2, 2], [3, 3, 3]));  // Output: NO
console.log(twoArrays(7, [1, 2, 3], [6, 6, 6]));  // Output: YES
