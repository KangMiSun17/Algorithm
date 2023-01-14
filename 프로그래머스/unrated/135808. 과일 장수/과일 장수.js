function solution(k, m, score) {
    var answer = 0;
    const sortArr = score.sort((a, b) => b - a);
    function getBoxs(data, size) {
      const arr = [];

      for (let i = 0; i < data.length; i += size) {
        arr.push(data.slice(i, i + size));
      }

      return arr;
    }
    const boxs = getBoxs(sortArr, m);
    boxs.forEach((box) => {
        if(box.length === m){
            answer += box.at(-1)*m;
        }
    })
    
    return answer;
}