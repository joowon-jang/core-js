/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

emailAddress === undefined || emailAddress === null ? receivedEmailAddress = 'user@company.io' : receivedEmailAddress = emailAddress;


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@compa';
receivedEmailAddress = emailAddress || 'user@compa';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log( 0 || WIDTH);
console.log( 0 ?? WIDTH);

console.log( undefined || WIDTH);
console.log( undefined ?? WIDTH);

console.log( isActive || WIDTH);
console.log( isActive ?? WIDTH);

console.log( '' || WIDTH);
console.log( '' ?? WIDTH);