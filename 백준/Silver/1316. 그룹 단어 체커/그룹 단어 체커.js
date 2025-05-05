const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0];
let count = 0;

for(let i = 1; i <= n; i++){
    const word = input[i];
    let boolean = true;
    
    for(let j = 0; j <word.length; j++){
        if(word.indexOf(word[j]) !== j){
            if(word[j] !== word[j-1]){
                boolean = false;
                break;
            }
        }
    }
    if(boolean) count++;
}
console.log(count);