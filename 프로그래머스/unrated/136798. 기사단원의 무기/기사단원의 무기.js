function solution(number, limit, power) {
    var answer = 0;
    var measureList = [];

    for(let i = 1; i <= number; i++){
        var count = 0;
         for (let j = 1; j <= i / 2; j++) {

      if (i % j === 0) {
        count += 1;
      }
    }
measureList.push(count + 1);
    }
    
    measureList.forEach((el) => el > limit ? answer += power : answer += el)
    
    return answer;
}