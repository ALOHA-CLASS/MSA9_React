function sampleFunction() {
    // arguments (유사 배열 객체)
    // : 함수에 전달된 모든 전달 인자를 참조할 수 있는 객체
    console.log(arguments);
}

sampleFunction(1, 'hello', true)

// ⛔ 화살표함수에서는 사용할 수 없다.
const arrowFunction = () => {
    console.log(arguments);
}

arrowFunction(1, 'hello', true)

