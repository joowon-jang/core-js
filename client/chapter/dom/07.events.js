/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)

function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const firstEventRemove = bindEvent('.first', 'click', handleClick);

second.addEventListener('click', firstEventRemove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// (function () {
//   let count = 0;
//   const third = getNode('.third');

//   let clickHandler = () => {
//     console.log(++count);
//     if (count >= 5) {
//       third.removeEventListener('click', clickHandler);
//       clickHandler = null;
//     }
//   };

//   third.addEventListener('click', clickHandler);
// })();

const ground = getNode('.ground');
const ball = getNode('#ball');

// function handleClickBall({ offsetX: xPos, offsetY: yPos }) {
//   // const { offsetX: x, offsetY: y } = e;
//   const { offsetWidth: w, offsetHeight: h } = ball;

//   // const w = ball.offsetWidth;
//   // const h = ball.offsetHeight;

//   // let x = e.offsetX;
//   // let y = e.offsetY;

//   ball.style.transform = `translate(${xPos - w / 2}px,${yPos - h / 2}px)`;
// }

// ground.addEventListener('click', handleClickBall);

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);
  let template = /* html */ `
    <div class="emotion" style="top:${y}px; left:${x}px;">😍</div>
  `;

  insertLast(ground, template);
}

function debounce(callback, limit = 500) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

// ground.addEventListener('mousemove', debounce(handleMove));

function throttle(callback, limit = 500) {
  let waiting = false;

  return function (e) {
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('mousemove', throttle(handleMove));

// ground.addEventListener(
//   'mousemove',
//   throttle((e) => {
//     console.log(this, e);
//   })
// );

// let waiting = false;
// function throttle(callback, limit = 2000) {
//   if (!waiting) {
//     callback();
//     waiting = true;

//     setTimeout(() => {
//       waiting = false;
//     }, limit);
//   }
// }

// throttle(() => {
//   console.log('a');
// });
