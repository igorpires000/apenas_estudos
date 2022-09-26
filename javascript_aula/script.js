//Aula 12 Operador Spread//
//o spread são os 3 pontos
//o spread pode ser usado também em objeto

/*const jogador1 ={
    nome:"Igor",
    energia: 100,
    vida: 3,
    magia: 30
}

const jogador2 ={
    nome:"Breno",
    energia: 100,
    vida: 5,
    magia: 80
}
const jogador3 ={...jogador1, ...jogador2};

console.log(jogador3)
*/
/*
const soma =(v1,v2,v3) =>{
    return v1+ v2+ v3;
}
let  valores = [1,5,4]

console.log(soma(...valores))
*/
//sem o spread da undifined com ele 
//o console consegue executar



//Aula 14 Switch Case


/*let num1 = 6;
let num2 = 10;
let num3 = 10;
let resSom = num2 + num3
let resSub = num2 - num3
let resMul = num2 * num3
let resDiv = num2 / num3

switch(num1){
    case 1: console.log(`A soma total é de: ${resSom} `)
            
        break;
    case 2: console.log(`A soma total é de: ${resSub} `)
            
        break;
    case 3: console.log(`A soma total é de: ${resMul} `)
        break;
    case 4: console.log(`A soma total é de: ${resDiv} `)
        break;
    
    default: console.log("Selecione uma das operações");
        break;
}*/

//Laço de repetição FOR

/*for(let i = 0; i <= 20; i++){
    console.log(`Escreva ${i}`);
}*/

//Loops FOR IN E FOR OF
//São bons para Arrays

/*let num = [10, 20,30,40,50];

for(i in num){
    console.log(num [i]); 
    //Aqui eu preciso declar o num 
    //Se eu não fizer ele vai imprimir
    //Apenas a posição dos elementos
}
for(i of num){
    console.log(i);
}*/

/*Loop While */
//Calculando o fatorial de 'n'

/*let n = 10;
let fat = 1

while(n >= 1){
    fat*= n
    //fat = fat*n
    n--
}
console.log(fat);
*/



///////////////Funções Simples//////////////////////

/*
function imprimirNoConsole(){
    console.log("Olá Mundo")
}

imprimirNoConsole()

function imprimirNum(num){
    console.log(`O número é: ${num}`);
}
imprimirNum(2);

const numAleatorio =function(){
    console.log(Math.random());
}

numAleatorio();

*/
////////Outra forma de executar uma func//////
/*function multiplicar(x,y,z){
    return x*y*z;
}
console.log(multiplicar(2,3,4));

const multi= multiplicar(5,4,8);

console.log(`O valor de mult é: ${multi}`);



function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirgir")
    }else if(idade < 18 && cnh == false){
        console.log("Você não pode dirigir")
    }else if(idade >= 18 && cnh == false)
        console.log("Você precisa de uma cnh")
}

podeDirigir(18, true);
*/

////Escopo de uma Function/////
//Os dois "Y" são diferentes
/*
let y = 10

function imprimir(){
    let y =20;
    console.log(y);
}
imprimir();
console.log(y);
*/

//Escopo aninhado (Nested Scopes)

/*
let a = 10; //Variavel a Global

function somar(x,y){
    let a = x+y;
    console.log(a);  //Variavel a da function
}

if(a > 5){
    let a = 6
    console.log("Olá"); // Variavel a do if 
}

console.log(a);

somar(1,10);

//Todas as variaveis são diferentes
*/

//Arrow Functions
/*
const soma = (a, b) =>{
    return a+b;
}

console.log(soma(5,5));

const escreva = () =>{
    console.log("Olá");
}

escreva();

const ifOuElse = (a,b) => {
    if(a > b){
        console.log("A é maior que B")
    }else{
        console.log("B é maior que A");
    }
    }
ifOuElse(5,15);


const multiplicarPorDois = x => x * 2; // Ela é boa para funcoes com uma logica simples
// Caso a function seja complexa, melhor optar por uma completa.

console.log(multiplicarPorDois(5));
*/

//////////Argumentos Opcionais///////////
/*
function soma (a,b){
    if(a === undefined || b === undefined){
        console.log("Você precisa definir os 2 valores!")
    }else{
        return a + b;
    }
}

soma(2)

console.log(soma(2,3));

function saudacao(nome, idade){
    if(idade === undefined){
        console.log(`Olá ${nome}`);
    }else{ 
        console.log(`Olá ${nome} você tem ${idade} anos.`);
    }
}

saudacao("igor");

saudacao("Joao", 23);
*/


/////Argumento DEFAULT/////
/*
function potencia(base, exp=2){ //O exp =2 é o default da função
    return Math.pow(base, exp);
}
console.log(potencia(4));

console.log(potencia(2,3));
*/

//Closure = Fechamento //////// Esse método será revisto com OO
/* 
function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));
*/
