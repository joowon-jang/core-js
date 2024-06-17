/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength: ', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter: ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'Pa' + message.slice(2);
console.log('immutableChangeCharacter: ', immutableChangeCharacter);

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice: ', slice);
let subString = message.substring(4, 13);
console.log('subString: ', subString);
let subStr = message.substr(4, 12);
console.log('subStr: ', subStr);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');
console.log('indexOf: ', indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();

  if (agent.indexOf('chrome') >= 0) return 'chrome';
  else if (agent.indexOf('edg') >= 0) return 'edge';
  else if (agent.indexOf('safari') >= 0) return 'safari';
  else if (agent.indexOf('firefox') >= 0) return 'firefox';
}

console.log(checkBrowser());

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf: ', lastIndexOf);
let includes = message.includes('more');
console.log('includes: ', includes);
let startsWith = message.startsWith('less');
console.log('startsWith: ', startsWith);
let endsWith = message.endsWith('more.');
console.log('endsWith: ', endsWith);

let str = '    a  b        c                d       ';

// 공백 잘라내기
let trimStart = str.trimStart();
console.log('trimStart: ', trimStart);
let trimEnd = str.trimEnd();
console.log('trimEnd: ', trimEnd);
let trim = str.trim();
console.log('trim: ', trim);

const replaceAll = str.replaceAll(' : ', '');
console.log('replaceAll: ', replaceAll);

const replace = str.replace(/\s*/g, '');
console.log('replace: ', replace);

const trimText = (string) => string.replaceAll(' : ', '');

console.log('trimText (function): ', trimText(str));

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat: ', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase: ', toLowerCase);
let toUpperCase = message.toUpperCase();
console.log('toUpperCase: ', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
