const num1 = parseInt(window.prompt("Insira um número: "));
const num2 = parseInt(window.prompt("Insira outro número: "));

const sum = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;

console.log(`Resultados das operações:
soma: ${sum}
subtração: ${sub}
multiplicação: ${multi}
divisão: ${div}`);