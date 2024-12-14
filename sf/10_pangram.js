/*
A pangram is a string that contains every letter of the alphabet.
Given a sentence determine whether it is a pangram in the English alphabet.
 Ignore case. Return either pangram or not pangram as appropriate.


write a function to determine whether given string is pangram or not
 */

function pangrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lower = s.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (!lower.includes(alphabet[i])) {
      return 'not pangram';
    }
  }

  return 'pangram';
}

function isPangram(sentence) {
  const lowercaseSentence = sentence.toLowerCase();

  const alphabetSet = new Set();

  for (let char of lowercaseSentence) {
    if (char >= 'a' && char <= 'z') {
      alphabetSet.add(char);
    }
  }
  return alphabetSet.size === 26 ? "pangram" : "not pangram";
}
Cases
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: pangram
console.log(isPangram("Hello World")); // Output: not pangram
console.log(pangrams("Pack my box with five dozen liquor jugs")); // Output: pangram
