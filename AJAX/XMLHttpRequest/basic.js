// XMLHttpRequest
// ⛔ 에러 : ReferenceError: XMLHttpRequest is not defined
// 브라우저의 객체이기 때문에, node 런타임 환경에서는 실행 불가

// XMLHttpRequest 객체 생성
let xhr = new XMLHttpRequest()

// 이벤트 핸들러 
xhr.onreadystatechange = () => {
    // 요청 완료 상태 
    if(xhr.readyState === xhr.DONE) {
        // 응답 성공(200) 
        if( xhr.status === 200 ) {
            // responseText : 응답 데이터 (plain/text, json, xml ...)
            console.log(xhr.responseText);
        } 
        // 응답 실패
        else {
            console.error('요청이 실패하였습니다. - ', xhr.status);
        }
    }
}

let url = 'https://httpbin.org/get'

// 요청 열기
// open(요청 메소드, URL, 비동기여부)
xhr.open('GET', url, true)

// 요청 전송
// send( 데이터[body] )
xhr.send()
