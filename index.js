function limparCampos(){
  document.getElementById('number1').value = "";
  document.getElementById('number2').value = "";
  document.getElementById('resultado').value = "";
}

function calcular(operador) {
  let numero1 = parseFloat(document.getElementById('number1').value);
  let numero2 = parseFloat(document.getElementById('number2').value);
  let resultado;


  // Verifica se os inputs são válidos
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  // Realiza a operação baseada no operador
  if (operador === "+") {
    resultado = numero1 + numero2;
  } else if (operador === "-") {
    resultado = numero1 - numero2;
  } else if (operador === "*") {
    resultado = numero1 * numero2;
  } else if (operador === "/") {
    // Previne divisão por zero
    if (numero2 === 0) {
      alert("Não é possível dividir por zero.");
      return;
    }
    resultado = numero1 / numero2;
  }

  // Exibe o resultado no campo
  document.getElementById('resultado').value = resultado;
}

// Atribui a função aos botões de operação
document.getElementById('btnSomar').onclick = function () {
  calcular("+");
};
document.getElementById('btnSubtrair').onclick = function () {
  calcular("-");
};
document.getElementById('btnMultiplicar').onclick = function () {
  calcular("*");
};
document.getElementById('btnDividir').onclick = function () {
  calcular("/");
};

document.getElementById('btnLimpar').onclick = function () {
  limparCampos();
};

// Pega todos os inputs em ordem
const inputs = document.querySelectorAll('input');

// Adiciona o listener a cada input
inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o envio de formulários acidental
            // Se não for o último input, vai para o próximo
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            } else {
              
              alert('show')
            }
        }
    });
});
