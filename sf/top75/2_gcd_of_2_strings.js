/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // Check if str1 and str2 satisfy the gcd condition
  if (str1 + str2 !== str2 + str1) {
    return ""; // If they don't, return an empty string
  }

  // Helper function to find the GCD of two numbers
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Find the GCD of the lengths of the two strings
  const gcdLength = gcd(str1.length, str2.length);

  // Return the substring of str1 up to the gcd length
  return str1.substring(0, gcdLength);
};