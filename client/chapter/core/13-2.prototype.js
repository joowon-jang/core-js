/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }
  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이');

class Tiger extends Animal {
  static options = {
    test: 'test',
  };

  static set setTest(value) {
    this.options.test = value;
  }

  constructor(name) {
    // 프로토타입의 constructor를 현재 class에 불러오는 것
    super(name);
    this.pattern = '호랑이무늬';
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound + '🐯';
  }
}

const 호랑이 = new Tiger('호돌이');

/* -------------------------------------------------------------------------- */
/*                                 ToDoList 예시                                */
/* -------------------------------------------------------------------------- */

class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});
