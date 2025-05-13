function calcular(operador) {
    let numero1 = parseFloat(document.getElementById('number1').value);
    let numero2 = parseFloat(document.getElementById('number2').value);

    let resultado;

    if (operador === "+") {
        resultado = numero1 + numero2
    }
    if (operador === "-") {
        resultado = numero1 - numero2
    } if (operador === "*") {
        resultado = numero1 * numero2
    } else if (operador === "/") {
        resultado = numero1 / numero2
    }


    document.getElementById('resultado').value = resultado;


}


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

