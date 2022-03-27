const numeroInput = document.getElementById("numeroInput");
const indice = document.getElementById("indice");
const btInserirInicio = document.getElementById("btInserirInicio");
const btInserirFinal = document.getElementById("btInserirFinal");
const btZerar = document.getElementById("btZerar");
const btRemover = document.getElementById("btRemover");
const lista = document.getElementById("lista");

let array = [];

function inserirInicio(){
    let numero = parseInt(numeroInput.value);
    if (!isNaN(numero)) {
        array.unshift(numero)
        mostrarLista();
        numeroInput.value="";
    }
    numeroInput.focus();
}

function inserirFinal(){
    let numero = parseInt(numeroInput.value);
    if (!isNaN(numero)) {
        array.push(numero)
        mostrarLista();
        numeroInput.value="";
    }
    numeroInput.focus();
}

function zerar(){
    lista.innerHTML ="";
    numeroInput.value ="";
    numeroInput.focus();
    array = [];
}

function remover(){
    const indice = parseInt(indice.value);
    for(let i=0; i<array.length; i++){
         if(i==indice){
             array.splice((indice-1),1)
         } else {
             break;
         }
    }
    mostrarLista();
    numeroInput.value="";
    numeroInput.focus();

    
}

function mostrarLista(){
    
    lista.innerHTML ="";
    for (let i = 0; i <array.length ; i++) {
    lista.innerHTML += `<li>${array[i]}</li>`;
    }
}


btInserirInicio.onclick = inserirInicio;
btInserirFinal.onclick = inserirFinal;
btZerar.onclick = zerar;
btRemover.onclick = remover;