function start() {
  var button = document.querySelector('#button_calculate_imc');
  button.addEventListener('click', handleButtonClick);
  handleButtonClick();
}

function calculateIMC(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var input_weight = document.querySelector('#input_weight');
  var input_height = document.querySelector('#input_height');
  var imc_result = document.querySelector('#imc_result');

  var weight = Number(input_weight.value);
  var height = Number(input_height.value);
  var imc = calculateIMC(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imc_result.textContent = formattedImc;
}

start();
