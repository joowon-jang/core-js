const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete   => 성공 / 실패

// 시험용 객체
const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};

/* -------------------------------------------- */
/*               xhr callback 방식               */
/* -------------------------------------------- */

// 특정 url에 CRUD 요청을 보내고 응답에 대한 무언가를 하는 함수 (XMLHttpRequest 인스턴스를 사용)
function xhr({
  // 매개변수 객체를 받는 즉시 구조분해할당 및 기본값 설정
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  // 서버에서 받았을 때 이 문자가 json형식이라는 것을 알려주기 위한 헤더 설정 + 권한 관련 헤더 설정
  headers = {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',}}) {
  // xhr 객체 생성
  const xhr = new XMLHttpRequest();
  // xhr 객체 출력해보기
  console.log(xhr);

  

  // xhr의 헤더 설정
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // xhr의 readyState가 변경될 때마다 이벤트 호출
  xhr.addEventListener('readystatechange', () => {
    // xhr의 프로퍼티들 구조분해할당
    const { readyState, status, response } = xhr;
    console.log(readyState)

    // readyState가 complete단계(성공/실패)가 되었을 때
    if (readyState === 4) {
      // 성공
      // 200~399는 성공 그 외는 실패
      if (status >= 200 && status < 400) {
        // response가 JSON형태의 문자이므로 JS객체로 변경
        const data = JSON.parse(response);

        // 콜백함수 실행
        성공(data);
      }
      // 실패
      else {
        실패('실패!');
      }
    }
  });

  // initialize(loading) xhr
  xhr.open(method, url);

  // PUT, POST 일 때는 body 전송, GET, DELETE는 null 전송
  // JS객체를 문자로 변경하고 전송
  xhr.send(JSON.stringify(body));
}

// xhr함수 실행해보기
// xhr({
// url:ENDPOINT, 
//   성공:(parameter)=>{console.log(parameter)}, 
//   실패:(parameter)=>{console.log(parameter)}
// });

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면? ✅

// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   실패() {},
//   url: ENDPOINT,
// });

/* ----------------------- 함수의 프로퍼티로 메서드를 정의 (재귀함수 아님) ---------------------- */
xhr.get = (url, 성공, 실패) => {
  xhr({ url, 성공, 실패 });
};
xhr.post = (url, body, 성공, 실패) => {
  xhr({
    method: 'POST',
    body,
    url,
    성공,
    실패,
  });
};
xhr.put = (url, body, 성공, 실패) => {
  xhr({
    method: 'PUT',
    body,
    url,
    성공,
    실패,
  });
};
xhr.delete = (url, 성공, 실패) => {
  xhr({
    method: 'DELETE',
    url,
    성공,
    실패,
  });
};

//

/* -------------------------------------------- */
/*               xhr Promise 방식               */
/* -------------------------------------------- */

// 함수의 매개변수 기본값
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

// enumerable => 열거 가능한 => for..of/ for..in
// iterable   => 순환 가능한 => for..of
// immutable  => 불변의

// const arr = [1,2,3];
// const newArr = [...arr,4]

export function xhrPromise(options) {
  // 구조분해할당 + 객체합성
  const { method, url, body, headers, errorMessage } = {
    ...defaultOptions,
    ...options,
    // 한단계 더 들어가서 복사
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // xhr 객체 생성
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  // initialize(loading) xhr
  xhr.open(method, url);

  // header 설정
  // POST, PUT 서버에서 자료를 받았을 때, 이 자료가 어떤 형태다 알려줌 + 권한관련 설정
  // DELETE 때는 헤더가 없어야함
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // PUT, POST 일 때는 body 전송, GET, DELETE는 null 전송
  xhr.send(JSON.stringify(body));

  // Promise 객체 반환
  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        // status가 200~399이면 성공
        if (xhr.status >= 200 && xhr.status < 400) {
          // 반환하는 Promise 객체의 PromiseResult 프로퍼티에 resolve()안의 내용이 들어감
          resolve(JSON.parse(xhr.response));
        } else {
          // 실패하면 PromiseResult에 reject()안의 내용이 들어감
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({method:'DELETE', url:ENDPOINT}).then((res) => console.log(res))

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: 'POST' });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: 'PUT' });
xhrPromise.delete = (url) => xhrPromise({ url, method: 'DELETE' });
