let aluno = [
    {
      nome: "Amanda",
      age: 18,
      sex: "Feminino",
      height: 1.68,
      livingRoom: "A1",
      matematica: 8
    },

    {
      nome: "Breno",
      age: 19,
      sex: "Masculino",
      height: 1.72,
      livingRoom: "B1",
      matematica: 10
    },

    {
      nome: "Fernanda",
      age: 19,
      sex: "Feminino",
      height: 1.65,
      livingRoom: "A1",
      matematica: 9
    },

    {
      nome: "Henrique",
      age: 18,
      sex: "Masculino",
      height: 1.75,
      livingRoom: "B1",
      matematica: 7
    },

    {
      nome: "Carolina",
      age: 18,
      sex: "Feminino",
      height: 1.71,
      livingRoom: "A1",
      matematica: 6
    },

  ];
  console.log(aluno[0], aluno[1], aluno[2], aluno[3], aluno[4]);
  let media = 7
  let mediaTurma = (aluno[0].matematica + aluno[1].matematica + aluno[2].matematica + aluno[3].matematica + aluno[4].matematica) / 5;
  console.log(mediaTurma);

  function professora (aluno,nota){
    if (nota > media){
        return `O ${aluno} passou`;
    } else {
        return `O ${aluno} não passou`;
    }
}
console.log(professora(aluno[1].nome, aluno[1].matematica) );
