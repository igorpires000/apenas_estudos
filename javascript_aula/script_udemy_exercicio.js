//Funções ex 001
/*
function escreva(){
    console.log("Olá mundo!")
}

escreva()

const escreva2 = () =>{
    console.log("Olá Universo!")
}

escreva2()

const escreva3 = function(){
    console.log("Olá estrela!")
}

escreva3();*/

//Ex 002
/*
function escreva(idade){
    console.log(`Você tem ${idade} anos de idade`)
};

escreva(15);*/

//Exe 003
/*
const somar = (a,b) =>{
    return a + b;
} 

console.log(somar(4,5));*/

//Exe 004
/*
function retornar(a){
    return Math.floor(Math.random() * a) +1 ;
}
console.log(retornar(100))
*/

//Exe 005
/*
function autoEscola(){
    let pessoa = 17;
    if(pessoa >= 18){
        console.log("Você pode entrar na autoescola");
    }else{
        console.log("Você é menor de idade, complete 18 anos");
    } 
}

autoEscola();
*/
//Exe 006
/*
function data(dados){

    if(typeof dados === "number"){
        console.log("Isso é um número");
    }else if(typeof dados === "boolean"){
        console.log("Isso é um boolean");
    } else if(typeof dados === "string"){
        console.log("Isso é uma string");
    }

}

data(true);
data(23);
data("verdade");
*/
//Ex 007
/*
function retornoPositivo(){

    return Math.abs(-2445660);
}

console.log(retornoPositivo());
*/

//Ex 008
/*
function escrita(){
    let a = "Olá Mundo";

    if(a.length > 10){
        console.log("Texto muito grande!");
    }else{
        console.log("Texto dentro do limite.")
    }
}

escrita();
*/
//Ex 009
/*
function calPot(){
    let a = Math.pow(3,2)
    console.log(a);
}

calPot();
*/

//Ex 010

function decremento(){

    for (let i = 10; i > 0; i--){
        
        if(i % 2 ==0){
            console.log(`É par ${i}`)
        }
    }
}

decremento()