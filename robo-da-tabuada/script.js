const num = parseInt(prompt('Digite o número que será multiplicado de 1 até 20'))
let resultado = ""

for(let i = 1; i <= 20; i++){
   resultado += num + " * "+ i + " = " +(num*i) + "\n"
}
alert(`O resultado da multiplicação de ${num} é:\n ${resultado}`)