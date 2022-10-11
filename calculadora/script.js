const operacao = parseInt(prompt('Escolha a operação abaixo: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão(/) '));
const num1 = parseInt(prompt('Digite o 1º número inteiro'));
const num2 = parseInt(prompt('Digite o 2º número inteiro'));
let resultado = 0;

if(operacao === 1)
  resultado = num1 + num2;
else if (operacao === 2)
  resultado = num1 - num2;
else if(operacao === 3)
  resultado = num1 * num2;
else if (operacao === 4)
  resultado = num1 / num2;
else
  alert("Opção Inválida!");

document.querySelector('.informacoes').innerHTML = resultado;