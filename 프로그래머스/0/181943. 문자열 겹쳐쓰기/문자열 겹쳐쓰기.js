function solution(my_string, overwrite_string, s) {
    var answer = '';
    const prevStr = my_string.slice(0, s);
    const nextStr = my_string.slice(s + overwrite_string.length);
    answer = prevStr + overwrite_string + nextStr;
    return answer;
}