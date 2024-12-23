// 매개변수의 구조 분해 할당
function functionName( {param1, param2, param3} ) {
    console.log(`param1: ${param1}, param2: ${param2}, param: ${param3}`);
}

// 화살표 함수로 구조 분해 할당
let arrowFunc = ( {param1, param2, param3} ) => {
    console.log(`param1: ${param1}, param2: ${param2}, param: ${param3}`);
}

const params = {
    param1: 1,
    param2: 2,
    param3: 3,
}
functionName(params)
arrowFunc(params)