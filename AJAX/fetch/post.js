// fetch를 사용하여 POST 요청 보내기
const url = 'https://httpbin.org/post'          // URL 경로
const data = { name : 'joeun', age : 20 }       // 데이터 (객체)
// 옵션 객체 (method, headers, body)
// - method     : 요청 메소드 (GET, POST, PUT, DELETE)
// - headers    : 요청 헤더 객체
// - body       : 요청 본문 (data)
const init = {
    method  : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body    : JSON.stringify(data)
}

fetch(url, init)
    .then(response => {
        // 서버 응답을 JSON 형식으로 파싱
        return response.json();
    })
    .then(data => {
        // 파싱된 데이터 출력
        console.log(data);
    })
    .catch(error => {
        // 오류 처리
        console.error('Request failed:', error);
    });