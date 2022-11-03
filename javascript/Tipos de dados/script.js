var nome = "João" // string
var idade = 16 // number
var VerdadeiroOuFalso = true // boolean
var time; // Underfined
var comida = null / null 
var novoObjeto = {} // object

// objetos

const Alunos = {
    NomeDoAluno : 'Erick',
    IdadeDoAluno: 25,
    TimeDoAluno: false,
}

console.log(Alunos.NomeDoAluno)

//Verificar os tipos de dados

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof VerdadeiroOuFalso);
console.log(typeof Comida);
console.log(typeof novoObjeto);

//Você pode somar string e assim concatenar as palavras.

var nome2 = "Mateus"
var sobrenome = "Vaz"
var nomeCompleto = nome2 + " " + sobrenome;
console.log( nomeCompleto)

//Você pode somar numeros com strings, o resultado final será sempre uma string.

var gols = 1000;
var frase = 'Pelé fez ' + gols + 'gols'
console.log(frase)

//templete String
var golacos = 1000;
var frases2 = `Mateus vaz fez mais de $(golacos) gols`
console.log(frases2);


let up = "down"
let numer = "17"
var idadE = 17;
var nomE = "Eduardo"
var sobrenomE = "SouzA "
var nomecompleto = nomE + " " + sobrenomE
var up3 =  "It's time"
console.log(typeof nomecompleto)



//var numero = prompt("digite um valor:")
//console.log(numero)

//Faça um programa que pessa dois numeros para o usuario. Imprima a soma desses dois numeros.

//Criar dois prompt dentro de variaveis
let x = parseInt(prompt("digite o 1° valor:"))
let y = parseInt(prompt("digite o 2° valor:"))

//somar os resultados
let soma = x + y
console.log(soma)