//한글자
var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString();

// const input1 = input.trim();

// 한 줄에 여러 글자
// const input2 = input.split(' ');

// 여러 줄

const input3 = input.trim().split('\n');

const inputValue = input3;
const [start, end] = inputValue[0].split(' ').map(Number);
const items = [];

items.push({ num: start, gap: Math.abs(end - start) });

for (i = 0; i < Number(inputValue[1]); i++) {
  items.push({ num: inputValue[i + 2], gap: Math.abs(end - inputValue[i + 2]) });
}

items.sort((a, b) => a.gap - b.gap);

if (items[0].num === start) {
  console.log(Math.abs(end - items[0].num));
} else {
  console.log(Math.abs(end - items[0].num) + 1);
}
