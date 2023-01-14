function solution(X, Y) {
  var answer = "";
  const xArr = X.split("");
  const yArr = Y.split("");
  for (let i = 0; i < 10; i++) {
    const curX = xArr.filter((x) => Number(x) === i).length;
    const curY = yArr.filter((y) => Number(y) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") {
    return "-1";
  }
  if (Number(answer) === 0) {
    return "0";
  }
  answer = answer
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return answer;
}