/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

*/

function birthday(s, d, m) {
    let count = 0;
    let currentSum = 0;

    // Calculate the sum of the first `m` elements
    for (let i = 0; i < m; i++) {
        currentSum += s[i];
    }

    // Check if the first `m` elements form a valid segment
    if (currentSum === d) {
        count++;
    }

    // Slide the window through the array
    for (let i = m; i < s.length; i++) {
        currentSum += s[i];         // Add the next element to the window
        currentSum -= s[i - m];     // Remove the first element of the previous window

        // Check if the current window sum equals `d`
        if (currentSum === d) {
            count++;
        }
    }

    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // Output: 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); // Output: 0
console.log(birthday([4, 5, 4, 5, 4], 9, 2)); // Output: 2
