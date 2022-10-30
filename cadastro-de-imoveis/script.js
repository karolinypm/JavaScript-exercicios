/*Escreva um programa em JS que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
      - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
      - O menu interativo deve mostrar no topo a quantidade de imóveis cadastros.
      - O menu deve ter a opção de salvar um imóvel
      - Para salvar um novo imóvel o programa deve pedir as seguntes informações:
            - nome do proprietário
            - quantidade de quartos
            - quantidade de banheiros
            se possui garagem
      - O menu também deve ter a opção de mostrar todos os imóveis salvos*/
let opcao = ""
const imoveis = []


do{
  opcao = prompt(`Quantidade de imóveis cadastrados: ${imoveis.length}\n\n Escolha uma das opções abaixo: \n 1 - Cadastrar imóvel \n 2 - Exibir imóveis salvos \n 3 - Sair`)

  switch(opcao){
    case "1":
      let cadastroImovel = {};
      cadastroImovel.nome = prompt(`Digite o nome do proprietário:`)
      cadastroImovel.quartos = prompt(`Digite a quantidade de quartos:`)
      cadastroImovel.banheiros = prompt(`Digite a quantidade de banheiros do imóvel:`)
      cadastroImovel.garagem = prompt(`O imóvel possui garagem? (sim/não)`)
      const confirmacao = confirm(`Salvar este imóvel? \n\n Proprietário: ${cadastroImovel.nome} \n Quartos: ${cadastroImovel.quartos} \n Banheiros: ${cadastroImovel.banheiros} \n Garagem: ${cadastroImovel.garagem}`)

      if(confirmacao){
        imoveis.push(cadastroImovel)
        alert('Imóvel salvo com sucesso')
      }else{
        alert('Voltando para o menu inicial...')
      }
    break;
    case "2":
      for(let i=0; i<imoveis.length; i++){
        alert(`Imóvel ${i+1} \n Proprietário: ${imoveis[i].nome} \n Quartos: ${imoveis[i].quartos} \n Banheiro(s): ${imoveis[i].banheiros} \n Garagem: ${imoveis[i].garagem}`)
      }
    break;
    case "3":
      alert('Você escolheu sair')
    break;
    default:
      alert('Opção inválida')
  }

}while (opcao !== "3")


