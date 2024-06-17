function earth() {
  let water = true;
  let gravity = 10;

  return (value) => {
    gravity = value;

    return [water, gravity];
  };
}

const ufo = earth();

ufo(-10);

/* ----------------------------------- 버튼 예제 ----------------------------------- */

const button = document.querySelector('button');

/* normal function */
// function handleClick(){

//   let isClicked = false;
//   // true <-> false

//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{

//       document.body.style.background = 'white'
//     }

//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);

/* ------------------------------------ - ----------------------------------- */

function state(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}
