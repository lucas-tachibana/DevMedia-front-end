let cursos = [
    {nome: "Inglês", preco: 2500, carga_horaria: 160},
    {nome: "Espanhol", preco: 1500, carga_horaria: 110},
    {nome: "Francês", preco: 3600, carga_horaria: 200},
    {nome: "Chinês", preco: 5500, carga_horaria: 400},
    {nome: "Alemão", preco: 3800, carga_horaria: 230}
];

for(let curso of cursos) {
    console.log("Curso de " + curso.nome);
    console.log("Carga horária de " + curso.carga_horaria + " horas");
    console.log("Valor: R$" + curso.preco.toFixed(2));
    let valor_hora_aula = curso.preco / curso.carga_horaria;
    console.log("Custo da hora/aula: R$" + valor_hora_aula.toFixed(2));
    console.log("\n=====================\n")
}