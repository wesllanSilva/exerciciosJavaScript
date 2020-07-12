//Funções Nativas - transformaParaMaiusculo
function transformaParaMaiusculo(palavras){
    var novasPalavras = []  //criei um novo array pra guardar as informações.
   for (var i = 0; i < palavras.length; i++ ){
      
   novasPalavras.push(palavras[i].toUpperCase()) // .push adiciona as palavras ao novo array e .toUpperCase as transforma em maiuscula
   }
   return novasPalavras
} 