const display = document.querySelector('.display');
const displayHistory = document.querySelector('.history');

let values = [];
let operator = [];
let history = [];
let mem = [];

document
  .querySelectorAll('.number')
  .forEach(button => button.addEventListener('click', handleNumber));
document
  .querySelectorAll('.maths')
  .forEach(button => button.addEventListener('click', handleOperator));

document.querySelector('.equal').addEventListener('click', handleEquals);
document.querySelector('#clear').addEventListener('click', clearDisplay);
document.querySelector('#clearAll').addEventListener('click', clearAll);
document.querySelector('#memory').addEventListener('click', memorySwitch);
document.querySelector('#memoryClear').addEventListener('click', clearMemory);

function handleNumber(e) {
  display.textContent += e.target.textContent;
}

function handleOperator(e) {
  if (!values[0]) {
    values[0] = parseFloat(display.textContent);
    operator = e.target.textContent;
    display.textContent = '';
    displayHistory.textContent = `${values[0]} ${operator} `;
  } else {
    values[1] = parseFloat(display.textContent);
    displayHistory.textContent += `${values[1]} =  `;
    values[0] = calculate();
    display.textContent = values[0];
    operator = e.target.textContent;
  }
}
function handleEquals() {
  if (values.length < 2) {
    values[1] = parseFloat(display.textContent);
    displayHistory.textContent += `${values[1]} =  `;
    values[0] = calculate();
    display.textContent = values[0];
  }
}

function calculate() {
  switch (operator) {
    case '⁕':
      return values[0] * values[1];

    case '/':
      return values[0] / values[1];

    case '+':
      return values[0] + values[1];

    case '-':
      return values[0] - values[1];
  }
}

function clearDisplay() {
  return (display.textContent = '');
}

function clearAll() {
  values = [];
  operator = [];
  mem = [];
  display.textContent = '';
  displayHistory.textContent = '';
}

function memorySwitch() {
  if (mem.length == 0) {
    return setMemory();
  } else {
    return displayMemory();
  }
}

function setMemory() {
  mem = [display.textContent];
  displayHistory.textContent = '';
  return (display.textContent = '');
}
function displayMemory() {
  return (display.textContent = mem);
}
function clearMemory() {
  return (mem = []);
}
