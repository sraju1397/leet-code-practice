/*
  There is a collection of input strings and a collection of query strings.
  For each query string, determine how many times it occurs in the list of input strings.
  Return an array of the results.
*/

function matchingStrings(strings, queries) {
  const results = [];
  const frequencyMap = {};

  for (const string of strings) {
    frequencyMap[string] = (frequencyMap[string] || 0) + 1;
  }

  for (const query of queries) {
    results.push(frequencyMap[query] || 0);
  }

  return results;
}


// Example usage:
const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];
console.log(matchingStrings(strings, queries)); // Output: [2, 1, 0]
