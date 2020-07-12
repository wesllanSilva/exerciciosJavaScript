// A função a seguir (calculaIdade) não precisa ser alterada
// A função verifica se a pessoa pode entrar com base na idade.
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
   var [dia, mes, ano] = dataDeNascimento.split('/');
   var d = new Date();
   var anoAtual = d.getFullYear();
   var mesAtual = d.getMonth() + 1;
   var diaAtual = d.getDate();
   ano = +ano; mes = +mes; dia = +dia;
   var quantosAnos = anoAtual - ano;
   if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
       quantosAnos--;
   }
   return quantosAnos < 0 ? 0 : quantosAnos;
}
 // A parte acima já estava pre-definida
// Minha função começa aqui

function deixaEntrar(dataDeNascimento, censura){
    calcularIdade() > censura
}