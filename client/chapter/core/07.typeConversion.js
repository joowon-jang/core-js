/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof YEAR);
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));


// undefined, null
console.log('------------');
let days = null;
console.log(typeof (days + ''));

let friends;
console.log(typeof (friends + ''));

// boolean
console.log('----------');
let isClicked = true;
console.log('isClicked',isClicked);


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
console.log();

// null

// boolean
let isMarried = true;
console.log(Number(isMarried));

// string
let num = '100';
console.log(Number(num));
console.log(num * 1);

// numeric string

const width = '120.5px';
console.log(parseInt(width, 10), parseFloat(width));


/* 데이터 → 불리언 ---------------------------------------------------------- */

console.log(Boolean(friends));
console.log(!!friends);

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 