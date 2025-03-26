//array de objetos com nome e notas dos alunos
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "João", nota: 4.5 },
  { nome: "Andre", nota: 6 },
  { nome: "Laura", nota: 9.5 },
  { nome: "Pedro", nota: 3.5 },
];

//função buscar alunos aprovados, nota acima de 6
function buscaAlunosAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

const alunosAprovados = buscaAlunosAprovados(alunos); //usa a função para obter os alunos aprovados

console.log("Alunos Aprovados:"); //exibir alunos aprovados quando rodamos npm run build e node .\dist\exercicio_es6.js
alunosAprovados.forEach((aluno) => {
  console.log(`${aluno.nome}: ${aluno.nota}`);
});
