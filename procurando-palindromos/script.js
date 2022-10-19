const palavra = prompt('Digite uma palavra para verificar se é um palíndromo:')
let palavraInvertida = ""

for(let i = palavra.length -1; i >= 0; i--){
  palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
  alert(`${palavra} é um palíndromo`)
}else{
  alert(`${palavra} não é um palíndromo! \n\n ${palavra} é diferente de ${palavraInvertida}`)
}