/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickName = '호랑이';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

const obj = {};

obj.nickName = 'tiger';

// Object.defineProperty(obj,'age',{
//   value:30,
//   enumerable: true,
//   writable: false,
//   configurable:true
// })

// Object.defineProperties(obj,{
//   age:{
//     value:30,
//     enumerable:true,
//     writable:true
//   }
// })

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(key, javaScript[key]);
  }
}

// 점 표기법 => 변수 설정 x
// 대괄호 표기법 => 변수 설정 o

const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  // if({}.hasOwnProperty.call(tens, key))
  console.log(key, tens[key]);
}
