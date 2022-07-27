class Servicio {
    constructor (nombre, precio, lugar, ){
        this.nombre = nombre;
        this.precio = precio;
        this.lugar = lugar;
    }
}
const servicios = []

const idFormulario = document.getElementById('formulario');

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const lugar = document.getElementById('lugar').value;

    const servicio = new Servicio (nombre, precio, lugar,);
    servicios.push(servicio);

    localStorage.setItem('Servicio', JSON.stringify(servicios));
    idFormulario.reset();

    mostrarInfo(servicio);
    mostrarTot(servicio);
})
const servicio = new Servicio (nombre, precio, lugar,);
const resultado = document.getElementById('infoServicios');

const mostrarInfo = (servicio) => {
    let aux = '';
    aux += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${servicio.nombre}</h2>
            <p class="card-text">su total a pagar es: ${servicio.precio}</p>
            <p class="card-text">en la localidad de: ${servicio.lugar}</p>
        </div>
    </div>`;
    resultado.innerHTML = aux;
    }

opciones = document.formularioMeses.mes;
elegido = opciones.value;
tot = servicio.precio;

    function mostrarTot (servicio) {
        tot = servicio.precio;
            if(isNaN(tot)){
                console.log(tot)
            }
            else{
                console.log(tot)
            }
        }

    function cambia() {
        opciones = document.formularioMeses.mes;
        for (i=0;i<opciones.length;i++) {
           if (opciones[i].checked == true) {
              elegido = opciones[i].value
              }
           }
       switch (elegido) {
         case "1":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break;
         case "2":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break; 
         case "3":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break;
         case "4":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break;
         case "5":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break;
         case "6":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break;
         case "7":
            console.log(`Su total a pagar es: ${tot * opciones.value}$`)
         break;
         default: 
         alert('ingrese un valor valido');
         break;
         } 
       }

//Boton modo oscuro
botonModoNoche.addEventListener("click", () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('tema', "oscuro")  
 })
 botonModoDia.addEventListener('click', () => {
     document.body.classList.remove('darkMode')
     localStorage.setItem('tema', "claro")  
 })
