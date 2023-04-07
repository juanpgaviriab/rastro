import data from '/contenido/contenido.json' assert { type: 'json' };

const seccionIndex = document.querySelectorAll('.seccion').length;

let titulo = [];
let artista = [];
let descripcion = [];
let group = [];
let img = [];

let switch_info = [];
    
for (let index = 0; index < seccionIndex; index++) {
    titulo[index] = document.getElementById("titulo" + index);
    artista[index] = document.getElementById("artista" + index);
    descripcion[index] = document.getElementById("descripcion" + index);
    fetch('/contenido/contenido.json')
    .then(response => response.json())
    .then(data => {
        titulo[index].innerHTML = data[index].titulo;
        artista[index].innerHTML = data[index].artistas;
        descripcion[index].innerHTML = data[index].texto;
    })
    .catch(error => console.error(error));
    
}





