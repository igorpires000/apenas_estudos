/*
/////////////Manipulando o DOM///////////////////////

///////////////////////PARTE 1 //////////////////////////////////////

///////////Aprendendo o Método getElementById/////////////////////

const dc1 = document.getElementById("c1");

console.log(dc1);
console.log(dc1.innerHTML);
console.log(dc1.id);
console.log(dc1.className);
dc1.innerHTML = "CFB Cursos";
dc1.className = "estilo2"


const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5];

//for(d of arrayElementos)
//   d.innerHTML = "CFB Cursos"

//console.log(arrayElementos)

//Usando o map para percorrer todos os elementos da array

arrayElementos.map((e)=>{
    e.innerHTML = "CFB Cursos 2"
    console.log(e)
})
*/

///////////////////////PARTE 2 //////////////////////////////////////

///////////Aprendendo o Método getElementByTagName/////////////////////

const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");

//No array temos mais métodos para manipular
const arrayElementos = [dc1, dc2, dc3, dc4, dc5];

//const colecaoHtml = document.getElementsByTagName("div");
//Na coleção de elementos feita pelo getElementsByTagName não conseguimos manipular muito bem
//Mas podemos transformar essa coleção em Array


//Transformando o getElementsByTagName em Array

const colecaoHtml = [...document.getElementsByTagName("div")];

console.log(colecaoHtml)

