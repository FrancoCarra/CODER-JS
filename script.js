//creo los servicios
let servicio = [
    {
        nombre: 'Lamparita S.R.L',
        precio: 0,
        servicio: 'Luz',
        imagen: 'img/Luz comp.jpeg',
},
{
    nombre: 'Aguas Turbias',
    precio: 0,
    servicio: 'agua',
    imagen: 'img/Agua comp.jpeg',
},
{
    nombre: 'Gases Naturales',
    precio: 0,
    servicio: 'Gas',
    imagen: 'img/Gas comp.jpeg',
}
]
//agrego los servicios de manera interactiva al html

let Sv = document.getElementById('miServicio')
    for (const x of servicio) {
        Sv.innerHTML += `
                    <div id="formServicio" class="card main-div col m-1" style="width: 18rem;">
                        <img src="${x.imagen}" class="card-img-top" alt="#">
                            <div class="card-body">
                                <h5 id="nombreServicio" class="card-title">${x.nombre}</h5>
                                <p class="card-text">${x.servicio}</p>
                                <input type="number" class="form-control" id="precioServicio" name="precio">
                                <button type="submit" id="botonServicio" class="boton"> Agregar al Carrito </button>
                            </div>
                    </div>
    `
}
//guardo en local storage

if(localStorage.getItem('servicio')) {
    tareas = JSON.parse(localStorage.getItem('servicio'))
} else {
    localStorage.setItem('servicio', JSON.stringify(servicio))
}

const formServicio = document.getElementById("formServicio")
const nombreServicio = document.getElementById("nombreServicio")
const precioServicio = document.getElementById("precioServicio")
const botonServicio = document.getElementById("botonServicio")

//agregamos carrito, aca me hice un lio jaja

function AgregarServicio(){
    let x = {}
    x.valor = document.querySelector("#precioServicio").value;
    console.log(x.valor)
}
botonServicio.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('servicio'))
    divServicios.innerHTML = ""
    arrayStorage.forEach((servicio, indice) => {
        divServicios.innerHTML += `
        <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${servicio.nombre}</h2></div>
            <div class="card-text"><h3>${servicio.precio}</h3></div>
            <div class="card-body">
                <p class="card-title">${servicio.servicio}</p>
                <button class="btn btn-danger">Eliminar Servicio</button>
            </div>
        </div>
        `
    });
})

const editButtons = document.querySelectorAll(".boton");
editButtons.forEach(botonServicio => botonServicio.addEventListener('click',AgregarServicio, () => confirm));

//Boton modo oscuro

botonModoNoche.addEventListener("click", () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('tema', "oscuro")  
 })
 botonModoDia.addEventListener('click', () => {
     document.body.classList.remove('darkMode')
     localStorage.setItem('tema', "claro")  
 })