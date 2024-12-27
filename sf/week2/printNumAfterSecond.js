
// Print numbers from 10 to 1 with delay of 1 second between each value
for (let i = 10; i >= 1; i--) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}