// el programa solo sumara numeros positivos.
// si insertan numeros negativos, el programa se detiene.

let i = 0;

// el usuario ingresa un numero

let number = parseInt(prompt("ingrese un numero: "))
    while (number >= 0) {
        i += number;

    //agrega otro numero positivo
    number = parseInt(prompt("Ingrese un numero: "));
    break
}

// resultado
alert(`El total es: ${i + number}.`);