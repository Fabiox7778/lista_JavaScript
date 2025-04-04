let num1 = 30;
let num2 = 10;

let operacao = 1;

switch (operacao) {
    case 1:
        console.log("soma = " + (num1 + num2));
        break;
    case 2:
        console.log("Subtração = " + (num1 - num2));
        break;
    case 3:
        console.log("Multiplicação = " + (num1 * num2));
        break;
    case 4:
        console.log("Divisão = " + (num1 + num2));
        break;
    default:
        console.log("Operacação invalida");
        break;
}