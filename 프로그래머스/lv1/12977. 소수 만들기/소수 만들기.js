function solution(nums) {
  var answer = 0;
  let sumNum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumNum = nums[i] + nums[j] + nums[k];
        
        if (minority(sumNum)) answer++;
      }
    }
  }

  return answer;
}

function minority(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num > 1;
}