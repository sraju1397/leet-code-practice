/*
  Given a square matrix,
  calculate the absolute difference between the sums of its diagonals.
 */

function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][arr.length - 1 - i];

  }
  return Math.abs(leftToRight - rightToLeft);
}

/*
Solution:
  The primary diagonal (left-to-right) includes elements where the row index equals the column index (i == j).
  The secondary diagonal (right-to-left) includes elements where the row index and column index add up to n-1 (i + j == n - 1).
*/


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

console.log(diagonalDifference(matrix));
