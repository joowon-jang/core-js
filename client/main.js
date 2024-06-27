/* global gsap */

import { changeColor, clearContents, delayP, getNode, joowon, renderEmptyCard, renderSpinner, renderUserCard } from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//   console.log(res);
// });

const ENDPOINT = 'http://localhost:3000/users'

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)

  await delayP(1000);

  try{
    gsap.to('.loadingSpinner', {
      opacity:0,
      onComplete() {
        this._targets[0].remove();
        // getNode('.loadingSpinner').remove();
      }
    })

    const response = await joowon.get(ENDPOINT);
    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card')
    
    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 0.5,
        from:'start'
      }
    })
  }
  catch (err) {
    console.error(err)
    renderEmptyCard(userCardInner)
  }
  
}

renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button.delete');

  if(!button) return;

  const userCard = button.closest('.user-card');
  const index = userCard.dataset.index.slice(-1);

  joowon.delete(`${ENDPOINT}/${index}`).
  then(()=>{
    // window.location.reload();
    clearContents(userCardInner);
    renderUserList();
  })
}

userCardInner.addEventListener('click',handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  gsap.to('.pop',{autoAlpha:1})
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop',{autoAlpha:0})
}

function handleDoneClick(e) {
  e.preventDefault();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  joowon.post(ENDPOINT, { name,email,website })
  .then(()=>{
    gsap.to('.pop',{autoAlpha:0})
    clearContents(userCardInner);
    renderUserList();
  })

}

createButton.addEventListener('click',handleCreate);
cancelButton.addEventListener('click',handleCancel);
doneButton.addEventListener('click',handleDoneClick);