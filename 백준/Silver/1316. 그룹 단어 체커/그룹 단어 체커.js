//한글자
var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString();

// const input1 = input.trim();

// 한 줄에 여러 글자
// const input2 = input.split(' ');

// 여러 줄

const input3 = input.trim().split('\n');

const inputValue = input3;
const N = inputValue[0];
let count = 0;
let items = {};

for (i = 0; i < N; i++) {
  items = {};

  for (j = 0; j < inputValue[i + 1].length; j++) {
    if (items[inputValue[i + 1][j]]) {
      items[inputValue[i + 1][j]].push(j);
    } else {
      items[inputValue[i + 1][j]] = [j];
    }
  }

  const correct = Object.values(items).every(item => {
    const isOneGap = item.every((value, index) => {
      if (index === 0) {
        return true;
      }
      return value - item[index - 1] === 1;
    });

    if (item.length === 1 || isOneGap) {
      return true;
    }
  });

  if (correct) count++;
}

console.log(count);
