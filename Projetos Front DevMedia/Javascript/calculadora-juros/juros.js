import rl from 'readline-sync';

let valor = rl.question("Informe o valor devido: ");
let dias = rl.question("Informe quantos dias está em atraso: ");

let taxa;
let valorTaxa;
let total;

if(valor > 0) {
    if(dias > 0){
        function calculaTaxa(taxa, valor) {
            return taxa * valor;
        }
    
        function calculaTotal(valorTaxa, valor){
            return valorTaxa + valor;
        }
    
        if(dias > 15){
            taxa = 0.1;
        } else {
            taxa = 0.05;
        }
    
        valorTaxa = calculaTaxa(taxa, Number(valor))
    
        total = calculaTotal(valorTaxa, Number(valor));
    
        console.log("\nValor original da dívida: R$" + valor);
        console.log("Dias em atraso: " + dias);
        console.log("Taxa de Juros: " + taxa * 100 + "%");
        console.log("Valor dos Juros: R$ " + valorTaxa);
        console.log("Total: R$ " + total);
    }
    console.log("Não está em atraso")
} else {
    console.log("O valor da dívida deve ser maior que 0!")
}
