// export module : 모듈 내보내기

const number = 20

function method() {
    return 'This is a Module'
}

/*
    export default 모듈;
    : 대표 모듈 하나만 지정 가능
    - import 쪽에서 다른 이름으로 사용 가능
*/
// ⛔ 모듈에는 기본 내보내기가 여러 개 있을 수 없습니다.
export default number;
// ⛔ export default method;
export { method };