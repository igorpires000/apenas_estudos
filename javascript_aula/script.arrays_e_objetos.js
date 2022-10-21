
//Array
/*
let idade = [15, 23, 50, 93, 101];

let nome = ["Igor", "Jonathan", "Victor"];

let mistura = ["Igor", 25, "Jonathan", 32];

let boleano = [true, false,true];

console.log(mistura, nome, idade, boleano);
*/

//Mais sobre Array
/*
let mistura = ["Igor", 25, "Jonathan", 32];

console.log(mistura[3]); // Posso acessar diretamente o dado o primeiro sempre vai ser 0
console.log(mistura[mistura.length -3]); //Lendo de trás pra frente
*/

//Propriedades
/*
let mistura = ["Igor", 25, "Jonathan", 32];

console.log(mistura.length); //Consultando quantos itens tem dentro da array se tiver]
                                // só 1 item ele le quantos caracteres tem
*/

//Métodos são funções prontas do Js
/*
let marca = "nike";
let marca2 = "ADIDAS"
console.log(marca.toUpperCase()); // O uppercase e o lower só funcionam com string
console.log(marca2.toLowerCase());

console.log(typeof marca2.toLowerCase) // O método typeof identifica se é uma string ou function etc...
*/

//Objetos
/*
let pessoa = {
    nome: "Igor",
    idade: 25,
    altura: 1.74,
    apelido: "Igor2",
    falar: function(){
        console.log("Hello, world.")
    }
};

console.log(pessoa) // Acesso a todas as propriedades do objeto
pessoa.falar()
*/

//Objetos, Deletando e Adicionando propriedades

/*
let pessoa = {
    nome: "Igor",
    idade: 25,
    altura: 1.74,
    apelido: "Igor2"
};

console.log(pessoa);

delete pessoa.apelido; //Deletando uma propriedade;

console.log(pessoa);

pessoa.pesokg = 200; //Adicionando uma propriedade;

console.log(pessoa)
*/

//Métodos Keys dentro do Objeto
/*
let obj = {
    'chave1':1,
    'chave2':2,
    'chave3':3
};

console.log(obj);

console.log(Object.keys(obj)); //Eu recebo todas as chaves do objeto em Array
*/

//Mutability
/*
let objA ={
    nome:"Igor",
    idade:25
}

objB = objA; //O objeto B é a mesma coisa que o A, ou seja, o A sofreu uma mutação

//Se eu fizer uma mudança no objeto A, ele muda o B
//Se eu fizer uma mudança no objeto B, ele muda o A
//Já o objeto C não sofre essa alteração mesmo sendo parecido

console.log(objB)

let objC ={
    nome:"Igor", //Este Objeto C não é a mesma coisa que o Objeto A
    idade:25
}

console.log(objC)
*/

//Loop em Arrays
/*
let nomes = ["Matheus", "Maria", "José"]
for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i])
}


let pessoa = ["JoaoBacabal", "FilhoDoido", "ZéBunda", "Ortigueiro"]

for(let i = 0; i <= pessoa.length; i++){
    console.log(pessoa[i])
}
*/

//Métodos de array push e pop

//Push serve para inserir dados na array e pop para retirar 
/*
let pessoa = ["JoaoBacabal", "FilhoDoido", "ZéBunda", "Ortigueiro"]

let removido = pessoa.pop();//Só remove o último elemento 
let adicionado = pessoa.push("Kelen", 2, "Bruno") //Só adiciona a partir do último elemento

console.log(removido)
console.log(pessoa)



//Métodos de array Shift e  Unshift

let pessoa = ["JoaoBacabal", "FilhoDoido", "ZéBunda", "Ortigueiro"];


let remover = pessoa.shift();//Tira o primeiro elemento

console.log(pessoa)

pessoa.unshift("Kleber"); //Adiciona o primeiro elemento

console.log(pessoa)


//Métodos de array indexOf e lastIndexOf

let num = [4, 0, 1, 2, 7, 0];

console.log(num.indexOf(0))//Identica a posição do elemento de forma crescente

console.log(num.lastIndexOf(0))//Identica a posição do elemento de forma decrescente


//Métodos de array slice

let num = [4, 0, 1, 2, 7, 0];

console.log(num.slice(0, 5));//Posso limitar até quantos elementos ele vai recuperar

console.log(num.slice(0));//Pode pegar todos elementos da array



//Métodos de array forEach

let nomes = ["JoaoBacabal", "FilhoDoido", "ZéBunda", "Ortigueiro"];

nomes.forEach(nome =>{
    console.log(`O nome é ${nome}`);
});

//Essa função retorna o valor inteiro, ou seja, sem está dentro de uma array
//e retorna todos os valores dentro da array """""""""""Faça o teste se tiver dúvida"""""""""""


//Métodos de array Includes

let nomes = ["JoaoBacabal", "FilhoDoido", "ZéBunda", "Ortigueiro"];

console.log(nomes.includes("ZéBunda"));

console.log(nomes.includes("Zébunda"));

//Serve para achar um item bem específico
//a escrita do item entre as aspas precisa está idêntico ao que
//está na array, se não, retorna, false.


let num = [0,1,2,3,4,5,6,7,8,9,10];

console.log(num.reverse());

//O nome já diz, aparece todos de trás pra frente


//Métodos de string Trim
let text = "teste       ";

console.log(text.trim()); //Serve para tirar os espaços em branco


//Método de string padStart e padEnd 

let milAoContrario = '1';

console.log(milAoContrario.padEnd(5, '0'));
console.log(milAoContrario.padStart(5, '0'));

//Adiciona string no inicio com Start e no final com o End


//Método de string Split

let frase = "Olá seja bem vindo ao inferno hahahaha";

let palavras = frase.split(" ");

console.log(palavras);

let produto = "Banana;Maracujá;Morango;Amoeba";

let mercado = produto.split(";");

console.log(mercado)

//Separa as strings e as coloca em array


//Métodos string Join

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//Só funciona se for uma array

//Métodos string Repeat

let palavra = "Igor";

let repetir = palavra.repeat(20);

console.log(repetir)

//Serve para repetir a string 



//Operador Rest

let num1 = 27;
let num2 = 65;
let num3 = 23;
let num4 = 54;
let num5 = 11;
let num6 = 99;
let num7 = 100;


function imprimirNum(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNum(num1, num2, num3);
console.log("Pausa 1");

imprimirNum(num4, num5, num6);

console.log("Pausa 2");

imprimirNum(1,2,3,4,5,6,7,8,9,0);

//Serve para imprimir as variaveis e os parametros que passei;
*/

//Destructuring  com objetos

const pessoa = {
    name: "Igor",
    lastName: "Pires"
}

const {name: fname, lastName: lname} = pessoa;

console.log(fname);

console.log(lname);

//Dessa forma eu posso criar constantes para acessar a string como no exemplo
//Com fname e lname, não preciso acessar diretamente com o name e lastName.






