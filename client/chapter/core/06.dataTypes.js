/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);
// 2. 값이 할당되지 않은 상태
console.log(typeof undef);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello";
const single = 'hello';
const backtick = `hello ${10 + 5} ${double + ' ' + single}`;

console.log(backtick);

const str = new String('hello');

console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
  name: 'tiger',
  age: 40
}
console.log(obj);

const object = {
  name: 'joowon',
  age: 27
}
console.log(object);

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(id);
console.log(id2)
console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 20
}

// Array

const newArray = new Array(1,2,3);

const arr = [10, 100, 1000];

// function

function 더하기(a,b) {
  return a + b;
}

console.log(더하기(1,2))

// this
