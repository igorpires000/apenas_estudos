
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

*/
