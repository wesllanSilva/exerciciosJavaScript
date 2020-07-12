//Funções Nativas - Maximo e Minimo

function maxMin(a,b,c,d,e){
    var array = [0,1] // novo array pra guardar os dados.
    for (var i = 0; i < 5 ; i++){
        array[0] = math.min(a,b,c,d,e) // math.min pra trazer o menor valor.
        array[1] =  math.max(a,b,c,d,e) // math.max pra trazer o maior valor.
        return array
    }
}