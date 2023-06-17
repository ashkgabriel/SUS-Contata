// Objetos que serão utilizados para preenchimento dos dados.

let agendamento1 = {
    data: "05/07/2023",
    horario: "08:00",
    compromisso: {
      consulta: true,
      exame: false,
      procedimento: false,
    },
    UBS: {
      nome: "UBS 1",
      logradouro: "Av. do Exemplo",
      numero: "123",
      bairro: "Saúde",
    },
    tipo: tipoCompromisso(agendamento1.compromisso),
  };
  

let agendamento2 = {
    data: "05/08/2023",
    horario: "08:30",
    compromisso: {
        consulta: false,
        exame: true,
        procedimento: false,
    },
    UBS: {
        nome: "UBS 2",
        logradouro: "Av. do Outro Exemplo",
        numero: "1234",
        bairro: "Saúde",
    },
}

let agendamento3 = {
    data: "05/09/2023",
    horario: "10:00",
    compromisso: {
        consulta: false,
        exame: false,
        procedimento: true,
    },
    UBS: {
        nome: "UBS 3",
        logradouro: "Av. do Outro Outro Exemplo",
        numero: "321",
        bairro: "Saúde",
    },
}

function tipoCompromisso(compromisso) {
    if (compromisso.consulta === true) {
      return "Consulta";
    } else if (compromisso.exame === true) {
      return "Exame";
    } else {
      return "Procedimento";
    }
  }
  

// <======================================================!!=======================================================>

document.getElementById("agendamento1").addEventListener("click", function () {
    document.getElementById("descricao1").innerHTML = "Teste"
})