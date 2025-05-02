const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = input.split("").map(Number);
let arr = new Array(10).fill(0);

num.map((el) => {
  if (el === 9) {
    arr[6]++;
  } else {
    arr[el]++;
  }
});

arr[6] = Math.ceil(arr[6] / 2);

console.log(Math.max(...arr));