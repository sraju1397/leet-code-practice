/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
    console.log(count)
  }
  return candidate;

};

/* simplified version of the code for better understanding */
/*
  var majorityElement = function (nums) {
    const frequencyMap = new Map();
    const threshold = Math.floor(nums.length / 2);

    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      if (frequencyMap.get(num) > threshold) {
        return num;
      }
    }

    return null;
  };
*/