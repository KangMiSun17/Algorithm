var fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = input;
const b = Array(6).fill(0);
let reward = 0;

a.forEach(item => {
  b[item - 1] = b[item - 1] + 1;
});

const all = b.findIndex(item => item === 3) + 1;
const two = b.findIndex(item => item === 2) + 1;
const notOne = b.findIndex(item => item > 1) + 1;

if (all > 0) {
  reward = 10_000 + all * 1_000;
} else if (two) {
  reward = 1_000 + two * 100;
} else if (!notOne) {
  reward = Math.max(...a) * 100;
}

console.log(reward);
