function solution(N, stages) {
  var answer = [];
  let people = stages.length;

  for (let i = 1; i < N + 1; i++) {
    const tmp = stages.filter((stage) => stage === i).length;
    answer.push([i, tmp / people]);
    people -= tmp;
  }

  answer = answer.sort((a, b) => b[1] - a[1]);
  return answer.map((a) => a[0]);
}
