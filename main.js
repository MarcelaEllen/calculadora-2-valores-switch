//calculadora 2 valores
let num1 = parseFloat(prompt("Digite um número"))
let num2 = parseFloat(prompt("Digite outro número"))
let op = prompt("Agora escolha uma operação, digite o número correspondente a ela: 1- soma, 2- subtração, 3- multiplicação e 4- divisão")

let resultado

num1 = parseFloat(num1);
num2 = parseFloat(num2);

switch (op) {
    case '1':
        resultado = num1 + num2;
        break;
      case '2':
        resultado = num1 - num2;
        break;
      case '3':
        resultado = num1 * num2;
        break;
        case '4':
            if (num2 === 0) {
                console.log("Divisão por zero não é permitida.");
            } else {
                resultado = num1 / num2;
                let sobra = num1 % num2;
                console.log("O resto da divisão é: " + sobra);
            }
            break;
    default:
        console.log("Digite uma opção válida. 1, 2, 3 ou 4!")
        break;
}
    console.log("Resultado: " + resultado)
