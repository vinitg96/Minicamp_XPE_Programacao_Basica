// projeto

var inputA;
var inputB;
inputA = Number(document.querySelector('#inputA').value);
inputB = Number(document.querySelector('#inputB').value);

console.log(soma());

function start() {
  var buttonCalculate = document.querySelector('#button-calculate');
  buttonCalculate.addEventListener('click', showOnScreen);
}

start();

function showOnScreen() {
  var displaySoma = document.querySelector('#sum-result');
  displaySoma.textContent = soma();

  var displaySubt1 = document.querySelector('#subt1-result');
  displaySubt1.textContent = subtracao((type = 1));
  var displaySubt2 = document.querySelector('#subt2-result');
  displaySubt2.textContent = subtracao((type = 2));

  var displayMult = document.querySelector('#mult-result');
  displayMult.textContent = multiplicacao();

  var displayDiv1 = document.querySelector('#div1-result');
  displayDiv1.textContent = divisao((type = 1));
  var displayDiv2 = document.querySelector('#div2-result');
  displayDiv2.textContent = divisao((type = 2));

  var displayPot1 = document.querySelector('#pot1-result');
  displayPot1.textContent = potenciacao((type = 1));
  var displayPot2 = document.querySelector('#pot2-result');
  displayPot2.textContent = potenciacao((type = 2));

  var displayRaiz1 = document.querySelector('#raiz1-result');
  displayRaiz1.textContent = raiz((type = 1));
  var displayRaiz2 = document.querySelector('#raiz2-result');
  displayRaiz2.textContent = raiz((type = 2));

  var displayPerc1 = document.querySelector('#perc1-result');
  displayPerc1.textContent = percentagem((type = 1));
  var displayPerc2 = document.querySelector('#perc2-result');
  displayPerc2.textContent = percentagem((type = 2));

  var displayFatorial1 = document.querySelector('#fat1-result');
  displayFatorial1.textContent = fatorial((type = 1));

  var displayFatorial2 = document.querySelector('#fat2-result');
  displayFatorial2.textContent = fatorial((type = 2));

  var displayMedia = document.querySelector('#med-result');
  displayMedia.textContent = media();
}

function soma() {
  var soma = inputA + inputB;
  return soma;
}

function subtracao(type = 1) {
  if (type === 1) {
    return inputA - inputB;
  } else {
    return inputB - inputA;
  }
}

function multiplicacao() {
  return inputA * inputB;
}

function divisao(type = 1) {
  if (type === 1) {
    if (inputB === 0) {
      return 'nan';
    } else {
      return (inputA / inputB).toFixed(2);
    }
  } else {
    if (inputA === 0) {
      return 'nan';
    } else {
      return (inputB / inputA).toFixed(2);
    }
  }
}

function potenciacao(type = 1) {
  if (type === 1) {
    return inputA ** inputB;
  } else {
    return inputB ** inputA;
  }
}

function raiz(type = 1) {
  if (type === 1) {
    return Math.sqrt(inputA).toFixed(2);
  } else {
    return Math.sqrt(inputB).toFixed(2);
  }
}

function percentagem(type = 1) {
  if (type === 1) {
    if (inputB === 0) {
      return 'nan';
    } else {
      return ((inputA / inputB) * 100).toFixed(2) + '%';
    }
  } else {
    if (inputA === 0) {
      return 'nan';
    } else {
      return ((inputB / inputA) * 100).toFixed(2) + '%';
    }
  }
}

function media() {
  return (inputA + inputB) / 2;
}

function fatorial(type = 1) {
  var i;
  var result = 1;
  if (type === 1) {
    for (i = inputA; i > 1; i--) {
      result *= i;
    }
    return result;
  } else {
    for (i = inputB; i > 1; i--) {
      result *= i;
    }
    return result;
  }
}
