import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js'
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js'


function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(()=>{
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
//  })

const shouldRejected = true;

// const p = new Promise((resolve, reject) => {
//   if (!shouldRejected) {
//     resolve('성공!!');
//   } else {
//     reject('실패!');
//   }
// });

// console.log(p)

// 객체 합성

// 매개변수 객체 기본값
const defaultOptions = {
  shouldRejected:false,
  data:'성공',
  errorMessage:'알 수 없는 오류',
  timeout:1000
}



// const config = Object.assign({},defaultOptions);
// const config = {...defaultOptions};


export function delayP(options) {

  // 기본값 넣고
  let config = {...defaultOptions}

  // options가 숫자형이면 config.timeout만 변경
  if(isNumber(options)){
    config.timeout = options
  }
  
  // options가 객체이면 합성
  if(isObject(options)){
    config = {...defaultOptions,...options}
    // Object.assign(config,options)
  }
  
  // 구조분해할당
  const {shouldRejected,data,errorMessage,timeout} = config;

  // Promise 객체 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({message:errorMessage});
      }
    }, timeout);
  });
}

// delayP(1000)
// .then((res)=>{
//   console.log(res);
//   // then은 Promise 객체를 반환함
//   // 반환하는 그 객체는 return에 적힌 값을 PromiseResult로 갖는 Promise 객체임
//   // return에 아무것도 안적으면 undefined가 담겨있기 때문에
//   // 체이닝으로 다음에 오는 then에서 매개변수(res)로 앞에서 PromiseResult를 받아와도 undefined인 것
// })
// .then((res)=>{
//   console.log(res);
//   // 근데, 이렇게 Promise 객체를 직접 반환하게 되면,
//   // 반환하는 Promise의 PromiseResult를 PromiseResult로 갖는 Promise 객체를 반환함 (잘 읽어보세요...ㅋㅋㅋ)
//   // 그래서 다음에 오는 then 에서는 '어머'를 res로 받아간다...
//   return new Promise((resolve, reject) => {
//     resolve('어머')
//   });
// })
// .then((res)=>{
//   console.log(res);
// })
// .then((res)=>{
//   console.log(res);
// })



// async / await


// async 함수는 무 조 건 Promise object를 반환한다.
// await  2가지 기능 수행
//        1. result 꺼내오기
//        2. 코드 실행 흐름 제어

// await 뒤에 오는 프라미스객체의 내부 함수 실행이 완료될 때까지 기다렸다가
// 완료되는 순간 PromisResult를 가져옴


async function delayA(data){
  
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })

  // p.then((res)=>{
  //   console.log(res);
  // })

  // 위 주석 then과 같은 동작
  const result = await p ;
  console.log(result);

  return result
}

// delayA('오');


async function 라면끓이기(){

  const a = await delayP({data:'물'})
  console.log( a );

  const b = await delayP({data:'스프'});
  console.log( b );
  

  const c = await delayP({data:'면'});
  console.log( c );
  

  const d = await delayP({data:'그릇'});
  console.log( d );
}

// 라면끓이기();


async function getData(){
  
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/172');
  // console.log(data)

  insertLast(document.body,`<img src="${data.sprites.other.showdown['front_default']}" alt="" />`)

}




// getData()














  