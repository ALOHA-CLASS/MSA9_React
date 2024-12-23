// 객체 리터럴
const username = 'aloha'
const age = 20

// 기존 방식
const person1 = {
    username : username,
    age : age
}

// 향상된 객체 문법
// - 적용되는 객체의 변수명과 가져온 변수명이 같으면 생략 가능
const person2 = {
    username,
    age
}

console.log(person1);       // { username: 'aloha', age: 20 } 
console.log(person2);       // { username: 'aloha', age: 20 }


// ⚡ 객체의 변수명을 동적으로 선언
const key = 'gender'

const person = {
    name: 'aloha',
    age: 30,
    [key] : '남자'
}

console.log(person);


// 메서드
// - 기존 방식
const obj1 = {
    // 메소드
    method1: function() {
        console.log('method1() - 기존 방식 메소드 정의');
        
    }
}

// - 향상된 객체 문법
const obj2 = {
    method2() {
        console.log('method2() - 향상된 방식으로 메소드 정의');
    }
}


obj1.method1()
obj2.method2()

