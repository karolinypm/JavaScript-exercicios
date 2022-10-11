const primeiroNome = prompt("Digite o primeiro nome: ");
const sobrenome = prompt("Digite o sobrenome: ");
const campoDeEstudo = prompt("Digite o campo de estudo");
const anoDeNascimento = parseInt(prompt("Digite o ano de nascimento"));
const idade = 2022 - anoDeNascimento;

alert(`Nome completo: ${primeiroNome } ${sobrenome} \n Campo de estudo: ${campoDeEstudo} \n Idade: ${idade}`);