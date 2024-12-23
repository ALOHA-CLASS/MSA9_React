// export 한 모든 모듈 내용 가져오기
// ⭐ import * as 모듈객체명 from './모듈명.mjs'
import * as myModule from './module1.mjs'

console.log( myModule.number );

const result = myModule.method()
console.log(result);

