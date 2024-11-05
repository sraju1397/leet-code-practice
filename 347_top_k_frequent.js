var topKFrequent = function (nums, k) {
  const countMap = {};
  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  return Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => parseInt(num));
};


// v1
/*
var topKFrequent = function (nums, k) {
 let counter = new Map();
    let arr =[[]] , res = [], temp = [];
    nums.forEach(num => {
        counter.set(num, (counter.get(num) || 0) + 1);
    });

    counter.forEach((key, value) => {

        if (arr[key]) {
            arr[key].push(value)
        } else {
            arr[key] = [value]
        }
    })

    while (res.length !== k) {

        if (temp && temp.length) {
            res.push(temp.pop())
        } else {
            temp = arr.pop()
        }
    }

    return res
}
*/