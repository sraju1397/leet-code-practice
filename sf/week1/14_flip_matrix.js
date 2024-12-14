/*
Key Observations:
The top-left n x n submatrix consists of elements from the upper-left quarter.
To maximize the sum, for each cell in the upper-left quadrant, you can choose the maximum value from 4 symmetric positions:
Original cell: (i, j)
Flipped horizontally: (i, 2n - j - 1)
Flipped vertically: (2n - i - 1, j)
Flipped both: (2n - i - 1, 2n - j - 1)
Steps to Solve the Problem
Iterate through the cells in the upper-left quadrant of the matrix (indices 0 to n-1 for rows and columns).
For each cell (i, j), find the maximum value among the 4 symmetric positions.
Add the maximum value to the sum.
Return the total sum.
 */

function flippingMatrix(matrix) {
  const n = matrix.length / 2; // Half the matrix size
  let sum = 0;

  // Loop through the top-left n x n quadrant
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Find the maximum value from the 4 symmetric positions
      const topLeft = matrix[i][j];
      const topRight = matrix[i][2 * n - j - 1];
      const bottomLeft = matrix[2 * n - i - 1][j];
      const bottomRight = matrix[2 * n - i - 1][2 * n - j - 1];

      // Add the maximum value to the sum
      sum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
    }
  }
  return sum;
}
