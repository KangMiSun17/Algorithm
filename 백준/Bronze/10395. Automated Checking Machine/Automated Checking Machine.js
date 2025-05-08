const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const first = input[0];
const second = input[1];

const firstArr = first.split(' ');
const secondArr = second.split(' ');

console.log(secondArr.every((el, idx) => firstArr[idx] !== el) ? 'Y' : 'N');
