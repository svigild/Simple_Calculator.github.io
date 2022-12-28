const screenDisplay = document.querySelector('#screen');
const buttons = document.querySelectorAll('.btn');

let calculation = [];
let acumulado;

function calculate(button) {
  const value = button.textContent;
  
  if (value === "AC"){
    calculation = [];
    screenDisplay.textContent = '.';
  } else if (value === "="){
    screenDisplay.textContent = eval(acumulado);
  } else {
    calculation.push(value);
    acumulado = calculation.join('');
    screenDisplay.textContent = acumulado; 
  }
  
  
}

buttons.forEach(button => button.addEventListener('click', () => calculate (button)));