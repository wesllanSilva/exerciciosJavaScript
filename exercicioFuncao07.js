//Usando funções - Filtrar produtos
// As funções maisBaratosQue() e maisCarosQue() já estavam definidas.

function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }
 // Minha função filtra os varlores entre as duas acima.
 function precosEntre(valorMenor, valorMaior,  precos){
    return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos));
 }