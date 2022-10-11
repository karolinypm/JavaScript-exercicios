const nomePersonagemAtaque = prompt('Digite o nome do personagem de ataque');
const poderDeAtaque = parseFloat(prompt('Digite o poder de ataque'));
const nomePersonagemDefesa = prompt('Digite o nome do segundo personagem');
const pontosDeVida = parseFloat(prompt('Digite a quantidade de pontos de vida'));
const poderDeDefesa = parseFloat(prompt('Digite o poder de defesa'));
const possuiEscudo = parseFloat(prompt('Possui escudo? \n 1 - Sim \n 2 - Não'));
let dano = 0;
let novosPontosDeVida = 0;

if(poderDeAtaque > poderDeDefesa && possuiEscudo === 2){
  dano = poderDeAtaque - poderDeDefesa;
}
else if(poderDeAtaque > poderDeDefesa && possuiEscudo === 1){
  dano = (poderDeAtaque - poderDeDefesa) / 2;
}
else {
  dano = 0;
}

novosPontosDeVida = pontosDeVida-dano;

alert(`Danos: ${dano} \n Personagem de ataque: ${nomePersonagemAtaque} \n Poder de ataque: ${poderDeAtaque} \n Personagem de defesa: ${nomePersonagemDefesa} \n Poder de defesa: ${poderDeDefesa} \n Pontos de vida inicial: ${pontosDeVida} \n Pontos de vida final: ${novosPontosDeVida}`)
