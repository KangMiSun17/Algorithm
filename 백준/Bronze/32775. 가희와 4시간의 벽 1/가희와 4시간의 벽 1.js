const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);

const output = () => {
    if(A > B) {
      return 'flight'
    } else {
    return 'high speed rail'
    }
}

console.log(output())