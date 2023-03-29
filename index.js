const valueElm = document.querySelector('.counter__value');

const updateCounter = (number) => {
  valueElm.textContent = String(number).padStart(2, '0');
};

let value = Number(valueElm.textContent);
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {

  if (value < 99) {
    value += 1;
    updateCounter(value);
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
  }
});

// updateCounter(value);