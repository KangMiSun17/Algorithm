var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = input; 

console.log(n * 0.78, n * 0.8 + n * 0.2 * 0.78)