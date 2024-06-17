/* ---------------- */
/* Condition        */
/* ---------------- */

// let result = prompt("자바스크립트의 '공식'이름은 무엇일까요?",'');

// if(result === 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요?\n정답은 ECMAScript입니다!');
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    console.log('그 영화 참 재밌더라!');
  } else {
    // 영화 볼거니?
    let goingToWatchMovie = confirm('영화 볼거니?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼거니??');

      if (withWho === 'you') {
        console.log('사랑해');
      } else {
        console.log('왜 나랑 안봐요?');
      }
    } else {
      console.log('그래 나중에 한번 꼭 봐!');
    }
  }
}

// let didWatchMovie = confirm('그 영화 봤니?');

// didWatchMovie
//   ? console.log('그 영화 참 재밌더라!')
//   : confirm('영화 볼거니?')
//     ? prompt('누구랑 볼거니??').includes('you')
//       ? console.log('사랑해')
//       : console.log('왜 나랑 안봐요?')
//     : console.log('그래 나중에 한번 꼭 봐!');

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}
