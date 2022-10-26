//simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo as castas que estão atualmente no baralho e as opções de "Adicionar uma carta", "Puxar uma carta" e "Sair". Ao escolher "Adicionar uma carta", o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher "Puxar uma carta", o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de "Sair', caso contrário deve voltar ao menu.

const baralho = []
let opcao = ""

do{
  opcao = prompt(`Cartas no baralho: ${baralho.length} \n\n 1 - Adicionar uma carta \n 2 - Puxar uma carta \n 3 - Sair`)

  switch(opcao){
    case "1":
      const novaCarta = prompt('Qual é a carta?')
      baralho.push(novaCarta)
    break;
    case "2":
      const cartaRemovida = baralho.pop()
      if(!cartaRemovida){
        alert('Não existem cartas no baralho!')
      } else{
          alert(`Você puxou uma carta: ${cartaRemovida}`)
        }
    break;
    case "3":
      alert('Encerrando...')
    break;
    default:
      alert('Opção inválida!')
  }


}while (opcao !== "3") {
  
}