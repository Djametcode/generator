/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const firstP = document.querySelectorAll('p');
firstP.forEach((item, i) => {
  item.textContent = 'heloo world';
  item.style.backgroundColor = 'Aqua';

  if (i % 2 === 0) {
    item.style.backgroundColor = 'black';
    item.style.color = 'White';
  }
});

const foruthP = document.querySelectorAll('p');
foruthP[3].textContent = 'fourth para';
