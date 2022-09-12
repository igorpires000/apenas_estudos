let n1 = document.querySelector('#num_1')
let n2 = document.querySelector('#num_2')
let resultado = document.querySelector('#res')



function somar(){
     resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);  
}
function sub(){
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);      
}
function multi(){
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);      
}
function divi(){
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);      
}

