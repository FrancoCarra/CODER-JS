// programa para saber cuanto te llegara en servicios basicos al final de la cantidad de meses que elijas.
class Servicio {
    constructor(_nombre, _precio, _compañia) {
        this._nombre = _nombre
        this._precio = _precio
        this._compañia = _compañia
    }
    aplicarDescuento(porcentajeDescuento) { 
        this._precio -= (this._precio * porcentajeDescuento)
    }
    sumarMes(_cantidadMeses){
        this._precio *= _cantidadMeses
    }
}
const servicio1 = new Servicio("Agua", parseFloat(prompt("inserte aqui cuanto le vino en su factura de agua: ")), "Aguitas")
const servicio2 = new Servicio("Luz", parseFloat(prompt("inserte aqui cuanto le vino en su factura de luz: ")), "Lamparita S.R.L")
const servicio3 = new Servicio("Gas", parseFloat(prompt("inserte aqui cuanto le vino en su factura de gas: ")), "Gasete" )

const servicios = [servicio1, servicio2, servicio3]
alert(`Atencion! acaba de recibir una sorpresa por parte de: ${servicios[1]._compañia}`)

//el usuario se gano un descuento para su factura de luz :)

alert('Felicidades! Obtuvo un descuento del 30% para su factura de luz')
servicio2.aplicarDescuento(0.3)
alert(`su factura de luz quedaria en: ${servicio2._precio}`)
servicios.push(TotalConDescuento = servicio2._precio)
console.log(TotalConDescuento)

do{
    servicio1._precio
    servicio2._precio
    servicio3._precio
   Meses = parseFloat(prompt('Ingrese la cantidad de meses que quiera pagar sus cuentas, hasta maximo 5: '))
}while(this._precio >= 0)
    switch(Meses){
        case(1):
            alert(`Su total de gastos en servicios en 1 mes es de: ${servicio1._precio + servicio2._precio + servicio3._precio}`)
        break
        case(2):
            alert(`Su total de gastos en servicios en 2 meses es de: ${servicio1._precio + servicio2._precio + servicio3._precio * 2}`)
        break
        case(3):
            alert(`Su total de gastos en servicios en 3 meses es de: ${servicio1._precio + servicio2._precio + servicio3._precio * 3}`)
        break
        case(4):
            alert(`Su total de gastos en servicios en 4 meses es de: ${(servicio1._precio + servicio2._precio + servicio3._precio) * 4}`)
        break
        case(5):
            alert(`Su total de gastos en servicios en 5 meses es de: ${(servicio1._precio + servicio2._precio + servicio3._precio) * 5}`)
        break
        default:
            alert("Operacion no valida")
        break
    }
console.log(servicios.some((el) => el._precio >= 0))