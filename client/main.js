import data from './data/data.js';

import { getNode, getRandom, addClass, removeClass, showAlert, isNumericString, shake, copy } from './lib/index.js';

const submit = getNode('#submit');
const nameField = document.querySelector('#nameField');
const result = document.querySelector('.result');


function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if(!name || name.replace(/\s*/g,'') === '') {
    showAlert('.alert-error','공백은 허용하지 않습니다.');

    shake('#nameField').restart();
    
    return;
  }
  if(!isNumericString(name)) {
    showAlert('.alert-error','제대로된 이름을 입력해 주세요.');

    shake('#nameField').restart();

    return;
  }

  result.textContent = pick;
}

function handleCopy() {
  const text = result.textContent;
  if(nameField.value) {
    copy(text).then(() => {
      showAlert('.alert-success','클립보드 복사 완료!');
    })
  }
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click',handleCopy);
