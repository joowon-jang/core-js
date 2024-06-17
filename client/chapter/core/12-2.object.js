/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;
let conversationTool = messenger;

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사

Object.prototype.nickName = '호랑이';

const cloneObject = {};

for (let key in messenger) {
  cloneObject[key] = messenger[key];
}

console.log(cloneObject);

// 2. Object.assign()을 사용한 복사

const copyObject = Object.assign({}, messenger);
console.log(copyObject);

// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = { ...messenger };
console.log(spreadObject);

// 4. 객체를 복사해주는 유틸 함수
const copiedObject = (obj) => Object.assign({}, obj);

const newObject = copiedObject();

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = { ...cssMapA, ...cssMapB };
console.log(combinedCssMap);

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copiedContainerStyles = {
  ...containerStyles,
  ['max-width']: { ...containerStyles['max-width'] },
};

// 1. 깊은 복사 유틸리티 함수
// 범썜버전 (객체 -> 배열 변환해서 처리 후 -> 다시 객체로 변환)

// cloneDeep 함수 : 객체를 복사해서 새로운 객체를 만듬
function cloneDeep(object) {
  // 이 return문에 대한 설명은 다른 부분 설명 후 맨 아랫줄에 적음
  return Object.fromEntries(
    // 객체를 Object.entries() 메서드를 사용해 [[key,value],[key,value],[key,value],...] 형태의 2차원 배열로 변환
    // 그 다음 map 메서드를 사용해 큰 배열(바깥쪽대괄호)안에서 각각의 아이템([key,value]형태로 된 길이가 2인 작은배열(안쪽대괄호))에 대해 콜백함수를 실행해줌.
    // 근데 여기서 콜백함수(화살표함수)의 매개변수로 [key,value]를 넣어준 건 아래와 같음
    // [key, value]라는 형태의 매개변수에 하나의 배열(ex -> arr)이 들어와서 [key,value] = arr 이렇게 들어감
    // 작은 배열(ex -> lg: 960이 배열로 변환된 [lg, 960])을 [key,value] = [lg, 960]이렇게 쓴거랑 같음 (구조분해할당)
    // 그렇게 되면 함수 안에서 let key = lg; let value = 960 으로 쓴 거랑 같겠죠!
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      // value 값이 존재하는지, value의 타입이 객체인지 확인
      if (value && type === 'object') {
        // value가 객체라면 key: { ~ } 이렇게 되어있으니까 객체를 그냥 복사하면 참조에 의한 복사가 되어서 훼손될 수 있습니다
        // 그래서 잠시 실행컨텍스트(변수, 실행흐름? 등)를 멈춰두고 value를 또 한단계 들어가서 복사를 해줍니다
        value = cloneDeep(value);
      }
      // 그렇게 value가 객체가 아닐때가 되었을 때 드디어 return을 합니다.
      // 근데 [key, value]의 형태로 반환함 <- Object.entries()를 사용해서 변환한 형태랑 똑같죠?
      return [key, value];
      // 그 다음 Object.fromEntries()를 해주면 다시 {key: value} 형태의 객체가 되어서 객체를 return해줍니다
    })
  );
}

// 주원버전 (배열 -> 다시객체 변환 안함)
// myCloneDeep 함수 : 객체를 복사해서 새로운 객체를 만듬
const myCloneDeep = (obj) => {
  // 복사가 완료되고 프로퍼티들을 채워서 반환할 빈 객체을 준비
  const newObject = {};

  // let .. of ~ 에서 .. 부분은 ~에 오는 iterable한 자료의 각 아이템이므로 [key, value] 이런 형태의 작은배열이 들어감
  // Object.entries()를 사용해 (ex - [key,value] = [lg, 960]한 것과 같음) 구조분해 할당
  for (let [key, value] of Object.entries(obj)) {
    // value가 존재하는지, value가 객체인지 확인
    if (value && typeof value === 'object') {
      // value가 객체라면 key: { ~ } 이런 형태니까 그 객체를 또 한층 들어가서 복사함수를 실행
      newObject[key] = myCloneDeep(value);
    }
    // value가 객체가 아닐때가 오면 드디어 newObject.key = value로 넣어줌
    // 주의할 점은 newObject는 재귀가 한층씩 들어갈 때마다 새로운 컨텍스트에서 새롭게 선언했기 때문에 이름은 같지만 다른 스코프에 존재하는 다른 변수(const라 상수라 말하는게 맞지만 편의상)임
    newObject[key] = value;
  }

  // 그렇게 끝날 때 프로퍼티를 채워준 newObject를 반환하면 중간에 멈추고 한층 깊이 들어갔던 if문 안쪽의 부분으로 다시 돌아가서 반환된 객체를 value에 넣어줌
  return newObject;
};
// 모든 재귀가 끝나고나면 깊은복사 완료

let user = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    content: 'application/json',
    access: '*',
  },
};

function ajax(options) {
  const mixin = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const { method, headers, body } = mixin;

  return mixin;
}

console.log(
  ajax({
    method: 'POST',
    body: '데이터',
  })
);

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
