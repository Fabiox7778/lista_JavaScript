let salario = 10000;
let desconto;

if (salario > 2000) {
    desconto = 0.10;
} else {
    desconto = 0.05;
}

let salariofinal = salario - (salario * desconto);

console.log(salariofinal);