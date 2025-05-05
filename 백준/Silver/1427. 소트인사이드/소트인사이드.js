var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString();

const input1 = input.trim();
console.log(input1.split('').sort().reverse().join(''));
