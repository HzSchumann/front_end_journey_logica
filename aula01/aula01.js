//variavel - reseva na memoria que recebe um conteúdo
//string
nome = "Henzo Schumann";

//number
idade = 21;

//boolean
isHenzo = true;

//let da exclusividade de nome para essa variavel e deixa ela não pode ser criada denovo
let variavel1 = 'variavel 1';
variavel1 = 'mudou';

//a variavel pode ser reutilizada e sofrer alteração
var variavel2 = 4;
variavel2 = 2;

// A variavel se torna imutável quando é const criamos a variavel em maiusculo
const VARIAVEL3 = 'AULA 01 - Lógica com JavaScript'

//typeof retorna o tipo do dado
console.log("Tipo do dado nome: " + typeof(nome));
console.log("Tipo do dado idade: " + typeof(idade));
console.log("Tipo do dado isHenzo: " + typeof(isHenzo));

//comentarios // /* */

/*
+ - soma
- - subs
* - mult
/ - div
% - resto da divisão
*/

var numero1 = 10;
var numero2 = 20;

console.log("Resultado soma: " + (numero1 + numero2));
console.log("Resultado subs: " + (numero1 - numero2));
console.log("Resultado mult: " + (numero1 * numero2));
console.log("Resultado div: " + (numero1 / numero2));
console.log("Resultado resto: " + (10 % 2));

var numero1 = "10";
var numero2 = "20";

console.log("Resultado soma: " + (numero1 + numero2));

// parse int transforma o dado em int
console.log("Resultado soma: " + (parseInt(numero1) + parseInt(numero2)));
