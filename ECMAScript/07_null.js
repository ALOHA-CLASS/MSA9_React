// 👩‍💻 null 병합 연산자 (??)
// 변수가 null 또는 undefined인 경우에 대체값 사용
const userInput = null;
const username = userInput ?? 'Guest';
console.log(username); // 출력: 'Guest'

// OR 연산자로 Falsy 값(유사 거짓값) 처리
const f1 = null
const f2 = undefined
const f3 = 0
const f4 = ''
const f5 = false
const f6 = NaN

const output1 = f1 || '기본값1'
const output2 = f2 || '기본값2'
const output3 = f3 || '기본값3'
const output4 = f4 || '기본값4'
const output5 = f5 || '기본값5'
const output6 = f6 || '기본값6'

console.log(output1, output2, output3, output4, output5, output6);
