/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {

  const frequestMap = {};

  for (var i = 0; i < words.length; i++) {
    frequestMap[words[i]] = (frequestMap[words[i]] || 0) + 1;
  }


  return Object.entries(frequestMap)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, k)
    .map(x => x[0]);

};