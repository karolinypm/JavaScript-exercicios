/*Escreva um programa em JS para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:
      - área do triângulo: base * altura / 2
      - área do retângulo: base * altura
      - área do quadrado: lado²
      - área do trapézio: (base maior + base menor) * altura /2
      - área do circulo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de "Sair" e enquanto ela não for escolhida deverá voltar ao menu
Dica: treinar o uso das funções*/
function triangulo(){
  const base = prompt('Digite a base do triângulo:')
  const altura = prompt('Digite a altura do triângulo:')
  return base * altura / 2
}
function retangulo(){
  const base = prompt('Digite a base do retângulo:')
  const altura = prompt('Digite a altura do retângulo:')
  return base * altura
}
function quadrado(){
  const lado = prompt('Digite o lado do quadrado:')
  return lado * lado
}
function trapezio (){
  const ladoMaior = parseFloat(prompt('Digite o lado maior:'))
  const ladoMenor = parseFloat(prompt('Digite o lado menor:'))
  const altura = prompt('Digite a altura:')
  return (ladoMaior + ladoMenor) * altura / 2
}
function circulo(){
  const raio = prompt('Digite o raio do circulo:')
  return 3.14 * (raio*raio)
}

function menu(){
  return prompt('Calculadora Geométrica \n Escolha uma opção abaixo para iniciar o calculo geométrico do: \n 1 - Triângulo \n 2 - Retângulo \n 3 - Quadrado \n 4 - Trapézio \n 5 - Círculo \n 6 - Sair')
}

function executarCalculadora(){
  let opcao = ""
  do{
    opcao = menu();
    let resultado;
    switch(opcao){
      case "1":
        resultado = triangulo()
        alert(`A área do triângulo é: \n${resultado}`)
      break;
      case "2":
        resultado = retangulo()
        alert(`A área do retângulo é: \n${resultado}`)
      break;
      case "3":
        resultado = quadrado()
        alert(`A área do quadrado é: \n${resultado}`)
      break;
      case "4":
        resultado = trapezio()
        alert(`A área do trapézio é: \n${resultado}`)
      break;
      case "5":
        resultado = circulo()
        alert(`A área do circulo é: \n${resultado}`)
      break;
      case "6":
        alert('Encerrando...')
      break;
      default:
        alert('Opção inválida')
    }
    if(resultado){
      return executarCalculadora()
    }
  }while (opcao !== "6")
}

executarCalculadora();

