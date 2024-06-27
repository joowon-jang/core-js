

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

/* const joowon = async () => {
  // fetch함수를 실행하면 Promise객체 반환
  // -> 그 Promise 객체에서  await를 통해 PromiseResult를 받아옴
  // (Response라는 내장 클래스의 인스턴스(객체))
  // 해당 Response 인스턴스에 '스트림'이라는 형태로 본문(우리가 원하는 데이터)를 가지고 있지만 접근 불가
  // -> 할당
  const response = await fetch(url) ;
  // console.log(response)

  // response(Response 인스턴스)의 ok프로퍼티가 true인지 확인
  // true이면 정상적으로 받은 것
  if(response.ok){
    // 직접 접근할 수 없는 본문(문자)을 .json() 메서드를 통해 접근 및 JS객체로 파싱(변환)
    // 이 메서드도 비동기적으로 처리되고, Promise 객체를 반환함. (본문을 끝까지 읽고 파싱하는데 시간이 걸림)
    // await를 붙이면 기다렸다가 반환된 Promise 객체의 PromiseResult(본문, 즉 우리가 원하는 데이터)를 꺼냄.
    // -> 할당
    const data = await response.json();
    return data;
  }

}


const result = await joowon(ENDPOINT);

// console.log( result.data ); */

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


// fetch  => promise
export const joowon = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    // 한단계 더 들어가서 복사
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  const response = await fetch(url, restOptions) ;

  if(response.ok){
    response.data = await response.json();
  }
  
  return response;
}


// const result = await joowon({url:ENDPOINT});

// console.log( result );

joowon.get = (url,options) => {
  return joowon({
    url,
    ...options
  })
}


joowon.post = (url,body,options) => {
   return joowon({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
   })
}


joowon.delete = (url,options) => {
  return joowon({
    method:'DELETE',
    url,
    ...options
  })
}


joowon.put = (url,body,options) => {
  return joowon({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


joowon.patch = (url,body,options) => {
  return joowon({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}



// IIAFE

// (async function(){



  
  

// })()