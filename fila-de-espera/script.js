//O programa deve iniciar mostrando na tela um menu interativos contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de "Novo paciente", para adicionar um novo paciente ao fim da fila (pedindo o nome), "Consultar paciente", que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado e "Sair". O programa só deve ser encerrado ao escolher a opção de "Sair", caso contrário deve voltar ao menu.

let filaDeEspera = []
let opcoes = ""
let novoPaciente = ""
let proximoPaciente = ""

do {
  let paciente= ""
  for(let i = 0; i < filaDeEspera.length; i++){
    paciente += (i + 1) + "º - " + filaDeEspera[i] + "\n"
  }

  opcoes = prompt(`Ordem dos pacientes: \n ${paciente} \n\n Escolha uma das opções abaixo: \n 1 - Novo Paciente \n 2 - Próximo Paciente \n 3 - Sair`)

 
  switch(opcoes){
    case "1":
      novoPaciente = prompt('Digite o nome do paciente:')
      filaDeEspera.push(novoPaciente)
    break;
    case "2":
      proximoPaciente = filaDeEspera.shift()
      if(proximoPaciente){
        alert(`Próximo paciente: \n ${proximoPaciente}`)
      }else{
        alert('Não há pacientes na fila!')
      }
      break;
    case "3":
      alert("Você escolheu encerrar!")
      break;
    default:
      alert("Opção inválida!")
  }
  
} while (opcoes !== "3");