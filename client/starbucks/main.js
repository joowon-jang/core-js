const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => (t.style.height = 0);

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // h(t) -> h
    depthList.forEach(h);

    target.style.height = '100px';
  });

  a.addEventListener('mouseleave', () => depthList.forEach(h));
});

// header.addEventListener('mouseleave', () => depthList.forEach(h));
