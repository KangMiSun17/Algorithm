const fs = require("fs");

// 입력 읽기 (백준 호환)
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

// 상수 정의
const HANGUL_BASE = 0xAC00; // '가'

// N번째 글자 구하기
const codePoint = HANGUL_BASE + (N - 1);
const char = String.fromCharCode(codePoint);

console.log(char);
