
//calculadora 2 valores
let num1 = parseFloat(prompt("Digite um número"))
let num2 = parseFloat(prompt("Digite outro número"))
let op = prompt("Agora escolha uma operação, digite: + para soma, - para subtração, * para multiplicação e / para divisão")

let resultado

num1 = parseFloat(num1);
num2 = parseFloat(num2);

switch (op) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log("Divisão por zero não é permitida.");
        } else {
            resultado = num1 / num2;
            let sobra = num1 % num2;
            console.log("O resto da divisão é: " + sobra);
        }
        break;
    default:
        console.log("Operador inválido. Use +, -, *, ou /")
        break;
}

if (resultado !== undefined && !isNaN(resultado)) {
    console.log("Resultado: " + resultado);
}
