function solution(arr, query) {
    var answer = [];
    answer = arr;
    
    query.forEach((el, idx) => {
        if(idx % 2 === 0){
            answer = [...answer.slice(0, el + 1)]
        } else {
            answer = [...answer.slice(el)]
        }
    })
    
    return answer;
}