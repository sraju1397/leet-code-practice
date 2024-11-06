var twoSum = function (arr, target) {
  var map = {};
  for (var i = 0; i < arr.length; i++) {
    var complement = target - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;  // Add the current number to the map with its index
  }
  return [];  // If no pair found, return an empty array

}