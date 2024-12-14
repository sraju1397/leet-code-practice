// This problem is about finding the number of "beautiful arrangements" of integers from 1 to
// n, where the arrangement satisfies either of the following conditions:

// The 𝑖th number in the arrangement is divisible by 𝑖
// i is divisible by the 𝑖 ith number in the arrangement.


function arrangements(n) {
  let count = 0;

  // Helper function for backtracking
  function backtrack(pos, visited) {
    if (pos > n) {
      count++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
        visited[i] = true; // Mark as visited
        backtrack(pos + 1, visited);
        visited[i] = false; // Backtrack
      }
    }
  }

  // Initialize visited array and start backtracking
  let visited = new Array(n + 1).fill(false);
  backtrack(1, visited);

  return count;
}

// Example usage:
console.log(arrangements(5)); // Output: 10

console.log(arrangements(4)); // Output: 8

console.log(arrangements(3)); // Output: 3

console.log(arrangements(2)); // Output: 2
