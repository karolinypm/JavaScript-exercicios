const valorMetro = parseFloat(prompt('Digite o valor em metros'))
let novoValor = 0;
const conversao = parseInt(prompt('Escolha uma unidade de medida para conversão: \n 1 -  milímetro (mm) \n 2 - centímetro (cm) \n 3 - decímetro (dm) \n 4 - decâmetro (dam) \n 5 - hectômetro (hm) \n 6 - quilômetro (km)'))

switch(conversao){
  case 1:
    novoValor = valorMetro / 1000
    alert(`${valorMetro} metros = ${novoValor} milímetros`)
    break;
  case 2:
    novoValor = valorMetro / 100
    alert(`${valorMetro} metros = ${novoValor} centímetros`)
    break;
  case 3:
    novoValor = valorMetro / 10;
    alert(`${valorMetro} metros = ${novoValor} decímetros`)
    break
  case 4:
    novoValor = valorMetro * 10
    alert(`${valorMetro} metros = ${novoValor} decâmetros`)
    break
  case 5:
    novoValor = valorMetro * 100;
    alert(`${valorMetro} metros = ${novoValor} hectômetros`)
    break
    case 6:
      novoValor = valorMetro * 1000;
      alert(`${valorMetro} metros = ${novoValor} quilômetros`)
      break
    default:
    alert('Opção inválida!')
}