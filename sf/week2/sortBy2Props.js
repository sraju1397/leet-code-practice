function sortByAgeAndHeight(arr) {
  return arr.sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    } else {
      return a.height - b.height;
    }
  });
}
// short hand
// arr.sort((a, b) => a.age - b.age || a.height - b.height);