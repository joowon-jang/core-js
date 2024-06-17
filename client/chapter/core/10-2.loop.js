/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while(i < 5)

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let result = +prompt('순환 횟수');

// do {
//   console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
//   if(result < 0 ) {
//     break;
//   }
//   console.log(result);
//   result--;
// } while(result)

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;

// do {
//   console.log(count++);
// } while(count < result)

// console.log(first);

// do {
//   first = first.nextSibling;
// } while(first.nodeType !== 1);

// console.log(first);

// function next(node) {
//   node = document.querySelector(node);
//   do {
//     node = node.nextSibling;
//   } while(node.nodeType !== 1);

//   return node;
// }

// console.log(next('.first'));

// let first = document.querySelector('.first');

// string <- '.second'

let second = document.querySelector('.second');

function prev(node) {
  // 위에서 second를 미리 선언 및 할당해서
  // html 문서의 second 클래스를 가진 요소를 이미 가지고있는 경우
  // 그 second 변수를 매개변수(node)로 받음
  // 그래서 node의 type이 string인지('.second') 아닌지(위에서 할당해둔 second) 확인하고
  // string 형으로 들어왔을 때에만 if문 안의 DOM요소 선택(querySelector)을 진행해줌.
  if (typeof node === 'string') {
    // 아래에서 prev('.second') 이렇게 함수를 호출하면
    // let node = document.querySelector('.second');
    // 처럼 됨
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

const first = prev(second);
