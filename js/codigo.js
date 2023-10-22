// funciones
//funcion eleccion pc
let min = 1
let max = 3

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//funcion resultados de jugadas
function eleccion(jugada) {
    let resultado = ("")
    if (jugada == 1) {
        resultado = "piedra 🥌"
    } else if (jugada == 2) {
        resultado = "papel 🧻"
    } else if (jugada == 3) {
        resultado = "tijera ✂"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera.
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {

    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 piedra, 2 papel, 3 tijeras")

    alert("pc elige " + eleccion(pc))
    alert("tu eliges " + eleccion(jugador))

    //COMBATE
    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("GANASTE " + triunfos + " veces y perdiste " + perdidas + " veces.")





