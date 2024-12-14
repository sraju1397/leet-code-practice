// The problem requires implementing a function to compress a string based on consecutive occurrences of characters. Here's a simple implementation of the function in JavaScript:

function compressedString(message) {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === message[i + 1]) {
      count++;
    } else {
      compressed += message[i];
      if (count > 1) {
        compressed += count;
      }
      count = 1; // Reset count for the next character
    }
  }

  return compressed;
}


console.log(compressedString("aabbbbaaass")); // Output: "a2b4a3s2"
