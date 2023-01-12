let meteoros_trimestre_um = "Alfa Centaurídeos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimestre_dois = "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres = "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 14/09 e termina em 17/09";

let meteoros_trimestre_quatro = "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseídas começa em 27/12 e termina em 31/12";

let data_atual = new Date();
let mes_atual = data_atual.getMonth();

switch (mes_atual) {
    case 0:
    case 1:
    case 2:
        console.log("As chuvas de meteoros do primeiro trimestre são:\n\n" + meteoros_trimestre_um);
        break;

    case 3:
    case 4:
    case 5:
        console.log("As chuvas de meteoros do segundo trimestre são:\n\n" + meteoros_trimestre_dois);
        break;

    case 6:
    case 7:
    case 8:
        console.log("As chuvas de meteoros do terceiro trimestre são:\n\n" + meteoros_trimestre_tres);
        break;

    case 9:
    case 10:
    case 11:
        console.log("As chuvas de meteoros do quarto trimestre são:\n\n" + meteoros_trimestre_quatro);
        break;

    default:
        console.log("Nenhuma chuva de meteoro no período informado");
        break;
}