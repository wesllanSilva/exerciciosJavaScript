//Usando funções - Começa com Maiúscula

function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra)
 }
  // a parte acime já estava pre-definida.
  // Meu codigo verifica se as palavras do array iniciam com maiúscula.
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
  for (var i = 0; i < palavras.length; i++){
     if (comecaComMaiuscula(palavras[i])){
        console.log("começa com maiúscula")
     }else{
        console.log("Não começa com maiúscula")
     }
  }