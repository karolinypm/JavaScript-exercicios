let valorDisponivel = parseFloat(prompt('Digite o valor disponível'));
let opcoes = ""

do {
  opcoes = prompt(`Você tem R$${valorDisponivel} disponível, escolha a opção desejada: \n 1 - Adicionar mais valor \n 2 - Remover dinheiro \n 3 - Sair`)

  switch(opcoes){
    case "1":
      let adicionar = parseFloat(prompt('Qual valor deseja adicionar?'))
      valorDisponivel += adicionar
      break;
    case "2":
      let remover = parseFloat(prompt('Qual o valor deseja remover?'))
      valorDisponivel -= remover
      break;
    case "3":
      alert('Você escolheu sair')
      break;
    default:
      alert('Opção inválida!')
  }
} while (opcoes !== "3");