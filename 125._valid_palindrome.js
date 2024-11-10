/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++;
    } else if (!isAlphanumeric(s[right])) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;

  function isAlphanumeric(char) {
    return /^[a-zA-Z0-9]+$/.test(char);
  }

}