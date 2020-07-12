//Funções Nativas - Gerar Dezenas.
// minha função gera  6 dezenas aleatorias.
function gerarDezenas(){
    var dezenas = []
    for (var i = 0 ; i < 6 ; i++){

     dezenas.push( Math.random(Math.random() * 10))
    }
   
    return dezenas
}