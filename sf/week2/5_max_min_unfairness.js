/*
You will be given a list of integers,
and a single integer .
 You must create an array of length  from elements of  such that its unfairness is minimized.

 */

/**
 * @param {number} k
 * @param {number[]} arr
 */
function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let unfairness = arr[i + k - 1] - arr[i];
    if (unfairness < min) {
      min = unfairness;
    }
  }
  return min;
}

let unfairness = maxMin(3, [1, 2, 3, 4, 5]);
console.log(unfairness);
