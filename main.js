const calculator = document.createElement('div');
calculator.classList.add('calculator');

const screen = document.createElement('div');
screen.classList.add('screen');
screen.id = "screen";
calculator.appendChild(screen);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
calculator.appendChild(buttons);

const buttonConfig = [
 
  { label: '7', value: '7'},
  { label: '8', value: '8'},
  { label: '9', value: '9'},
  { label: '+', value: '+'},
  { label: '4', value: '4'},
  { label: '5', value: '5'},
  { label: '6', value: '6'},
  { label: '-', value: '-'},
  { label: '1', value: '1'},
  { label: '2', value: '2'},
  { label: '3', value: '3'},
  { label: '*', value: '*'},
  { label: '0', value: '0'},
  { label: '.', value: '.'},
  { label: '=', value: 'calculate'},
  { label: '/', value: '/'},
  { label: 'C', value: 'clearScreen'},
];

buttonConfig.forEach(btn => {
  const button = document.createElement('div');
  button.classList.add('button');
  button.textContent = btn.label;
  button.addEventListener('click', () => {
    if (btn.value === 'clearScreen') 
    {
      clearScreen();
    }
    else if (btn.value === 'calculate')
    {
      calculate();
    }
    else
    {
      appendToScreen(btn.value);
    }
  });

  buttons.appendChild(button);
});

function clearScreen()
{
  screen.textContent = '';
}

function appendToScreen(value)
{
  screen.textContent += value;
}

function calculate()
{
  const result = eval(screen.textContent);
  screen.textContent = result;
}

document.body.appendChild(calculator);