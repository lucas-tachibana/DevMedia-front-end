import rlsync from 'readline-sync';
var opcao;
const quantidadePontos = 30;
const tabelaSalarios = [
    {valor: 510, ano: 2010},
    {valor: 545, ano: 2011},
    {valor: 622, ano: 2012},
    {valor: 678, ano: 2013},
    {valor: 724, ano: 2014},
    {valor: 788, ano: 2015},
    {valor: 880, ano: 2016},
    {valor: 937, ano: 2017},
    {valor: 954, ano: 2018},
    {valor: 988, ano: 2019},
    {valor: 1045, ano: 2020}
];
const tabelaIpca = [
    {porcentagem: 5.91, ano: 2010},
    {porcentagem: 6.5, ano: 2011},
    {porcentagem: 5.84, ano: 2012},
    {porcentagem: 5.91, ano: 2013},
    {porcentagem: 6.41, ano: 2014},
    {porcentagem: 10.67, ano: 2015},
    {porcentagem: 6.29, ano: 2016},
    {porcentagem: 2.95, ano: 2017},
    {porcentagem: 3.75, ano: 2018},
    {porcentagem: 4.31, ano: 2019},
    {porcentagem: 4.52, ano: 2020}
]

var labelAno = "Ano:";
var labelSalario = "Salário mínimo:";
var labelIndice = "Inflação IPCA:"
var labelCresimento = "Crescimento Salarial:"

do {
    opcao = escolherOpcao()
    console.log(opcao);
    switch (Number(opcao)) {
        case 1: 
            //Listar os salários mínimos de 2010 à 2020
            for(let salario of tabelaSalarios) {
                console.log("\n" + labelAno.padEnd(quantidadePontos, ".") + salario.ano);
                console.log(labelSalario.padEnd(quantidadePontos, ".") + "R$" + salario.valor.toFixed(2).replace(".", ","));
            }
            break;
            
        case 2:
            //Listar o índice IPCA de 2010 à 2020
            for(let indice of tabelaIpca) {
                console.log("\n" + labelAno.padEnd(quantidadePontos, ".") + indice.ano);
                console.log(labelIndice.padEnd(quantidadePontos, ".") + indice.porcentagem.toFixed(2).replace(".", ",") + "%");
            }
            break;
                
        case 3:
            // Comparação entre o percentual de aumento salarial e o IPCA
            let salarioAnterior = 0;
            for (let contador = 0; contador < tabelaSalarios.length; contador++) {
                const salario = tabelaSalarios[contador];
                const indice = tabelaIpca[contador];
                let crescimento;
                if(contador == 0) {
                    crescimento = "-";
                } else {
                    salarioAnterior = tabelaSalarios[contador-1];
                    crescimento = obterPercentualCresimento(salarioAnterior.valor, salario.valor).toFixed(2).replace(".", ",") + "%"; 
                }
                console.log("\n" + labelAno.padEnd(quantidadePontos, ".") + salario.ano);
                console.log(labelSalario.padEnd(quantidadePontos, ".") + "R$" + salario.valor.toFixed(2).replace(".", ","));
                console.log(labelCresimento.padEnd(quantidadePontos, ".") + crescimento)
                console.log(labelIndice.padEnd(quantidadePontos, ".") + indice.porcentagem.toFixed(2).replace(".", ",") + "%");
            }
            break;

        case 4:
            // Sair
            console.log("Encerrando aplicação...")
            break;

        default:
            console.log("Opção inválida, tente novamente.")
            break;
    }


} while (opcao != 4)

function obterPercentualCresimento(valorAnterior, valorAtual) {
    let diferenca = valorAtual - valorAnterior;
    let porcentagem = (diferenca * 100) / valorAnterior;
    return porcentagem;
}

function escolherOpcao() {
    let opcoes = 
    `
    1 - Listar os salários mínimos de 2010 à 2020
    2 - Listar o índice IPCA de 2010 à 2020
    3 - Comparação entre o percentual de aumento salarial e o IPCA
    4 - Sair
    `
    console.log(opcoes);
    opcao = rlsync.question("Digite a opção desejada: ");
    
    return(opcao);
}

