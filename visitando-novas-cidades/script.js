const nomeTurista = prompt('Digite seu nome: ')
const visitou = confirm('Você já visitou alguma cidade?')
let cidades = 0;
let nomeCidades = "";

if(visitou === true){
while (cidades < 4) {
    let perguntaCidade = prompt('Qual a cidade visitada?');
    nomeCidades += " - " + perguntaCidade
    cidades ++;
    }
  } else{
    alert('Nenhuma cidade visitada')
  }
  alert(`${nomeTurista} essas foram as cidades visitadas: \n ${nomeCidades}`)