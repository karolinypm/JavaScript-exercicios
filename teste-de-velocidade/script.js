const car1 = prompt('Digite o nome do primeiro carro');
const speedCar1 = prompt('Digite a velocidade do primeiro carro');
const car2 = prompt('Digite o nome do segundo carro');
const speedCar2 = prompt('Digite a velocidade do segundo carro');

if(speedCar1 > speedCar2){
  alert(`O carro ${car1} é mais veloz que o carro ${car2}`)
}
else if(speedCar1 < speedCar2){
  alert(`O carro ${car2} é mais veloz que o carro ${car1}`)
}
else{
  alert(`O carro ${car1} e ${car2} possuem a mesma velocidade`)
}