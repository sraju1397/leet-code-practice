/*

Given a square grid of characters in the range ascii[a - z], rearrange elements of each row alphabetically, ascending.Determine if the columns are also in ascending alphabetical order, top to bottom.Return YES if they are or NO if they are not.

  Example

The grid is illustrated below.

a b c
a d e
e f g
The rows are already in alphabetical order.The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES.Only elements within the same row can be rearranged.They cannot be moved to a different row.

Function Description

Complete the gridChallenge function in the editor below.

gridChallenge has the following parameter(s):

string grid[n]: an array of strings
Returns

string: either YES or NO

  */
var arr = ['abc', 'ade', 'efg']
function gridChallenge(arr) {
  // Rearrange each row alphabetically
  var grid = arr.map(row => row.split('').sort().join(''));

  // Check if columns are in ascending order
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length - 1; j++) {
      if (grid[j][i] > grid[j + 1][i]) {
        return 'NO';
      }
    }
  }
  return 'YES';
}

gridChallenge(arr);