// Array
//é
/* uma grupo de valores. Servem para guardarmos diferente valores em uma unica variavel.
var videoGames = ['swith', 'PS4', 'Xbox'];

var numeros = [1,2,3]

console.log(videoGames{0})
console.log(videoGames{1})
console.log(videoGames{3})

console.log(numeros[0]+numeros[2])
*/
/*
var i = 0;
while(i<10){
    console.log(i);
    i = i + 1
}
*/
/*
for (var i = 0; i < 10; i = i+1){
    console.log(1)
}
*/

var videoGames = ['switch', 'PS4', 'Xbox'];

//forEach
//forEach é um metodo que executa uma função para cada item array. é uma forma mais simples de utilizarmos um loop com arrays
videoGames.forEach(function(a, b, c){
  console.log(a, b, c)

})


var brasil = [1958,1962, 1970,1994,2002]

brasil.forEach(Function(C){
    console.log('o Brasil ganhou a copa'+ c)
}) 