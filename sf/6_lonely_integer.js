/*
Find the Lonely Integer

Given an array of integers, where all elements but one occur twice, find the unique element.
 */

function lonelyinteger(a) {
  let unique = 0;
  for (let i = 0; i < a.length; i++) {
    unique ^= a[i];
  }
  return unique;
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
