import data from './data/data.js';

import { getNode, getRandom } from './lib/index.js';

const submit = getNode('#submit');
const nameField = document.querySelector('#nameField');
const result = document.querySelector('.result');


function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  result.textContent = pick;
}


submit.addEventListener('click', handleSubmit);
