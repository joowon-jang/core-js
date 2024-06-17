/* --------- */
/* Object    */
/* --------- */

/* global isObject */

/* Primitives vs. Object --------- */

isObject({});

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

const html = /* html */ `
  <h1>title</h1>
  <div class="first">
    hello
  </div>
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-zxk!@kadfkq',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

console.log((authUser.permission = 'free'));

console.clear();

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

console.log((authUser['permission'] = 'allPass'));

console.clear();

Object.prototype.nickName = '호랑이';

// 객체 안에 키가 있는지 확인 방법

// in 문

console.log('uid' in authUser);

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key, authUser[key]);
  }
}

// 객체의 key 만을 모아놓은 배열을 반환하는 메서드

const keyList = Object.keys(authUser);
console.log(keyList);

const valueList = Object.values(authUser);
console.log(valueList);

const keyValueList = Object.entries(authUser);
console.log(keyValueList);

function getPropertiesList(obj) {
  const result = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;
}

console.log(getPropertiesList(authUser));

console.clear();

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty]: phone,
  };
}

// authentication

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [
  10,
  100,
  1000,
  function (a, b) {
    return a + b;
  },
];

const [a0, a1, a2, a3] = arr;

for (let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}

const [spanFirst, spanSecond, ...rest] = document.querySelectorAll('span');

console.clear();

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  지유진: 110,
  함정민: 95,
  이진용: 15,
  한상학: 300,
};

console.log(salaries.함정민);

const { 지유진: 지, 함정민: 함, 한상학: 한, 이진용: 이 } = salaries;

function createUserObject({ name, age, gender, job: j }) {
  // const { name, age, gender, job } = obj;

  return { name, age, gender, job: j };
}

const data = {
  name: '장주원',
  age: 27,
  gender: 'male',
  job: '개발자',
};

const person = createUserObject(data);
