var jugada = document.getElementById("jugada");
const form = document.getElementById("form");
var mostrarJugadaComputadora = document.getElementById("jugadaComputadora");
var mostrarResultado = document.getElementById("resultadoPartida");

form.addEventListener("submit", function(e){
    console.log(e)
    e.preventDefault();
})
function juegaPc(){
    var jugadaComputadora = "";
    var azar = Math.floor(Math.random()*3)+1;
    if (azar == 1){
        jugadaComputadora = "piedra"
    }
    if (azar == 2){
        jugadaComputadora = "papel"
    }
    if (azar == 3){
        jugadaComputadora = "tijera"
    }
    return jugadaComputadora;
    
}

function juego(){
    
    console.log(jugada);
    console.log(jugada.value)

    if( jugada.value.toLowerCase() === "piedra" || jugada.value.toLowerCase() === "papel" || jugada.value.toLowerCase() === "tijera"){
        jugada.setCustomValidity('');
        console.log("Jugada Válida")
        console.log(`Ingreso de ${jugada.value}`);

        var jugadaPc = juegaPc();
        mostrarJugadaComputadora.value = jugadaPc.toUpperCase();
        var jugadaUsuario = jugada.value.toLowerCase();
        var resultado = "";

        console.log(jugadaPc);
        console.log(jugadaUsuario);

        if(jugadaPc == jugadaUsuario){
            resultado = "Empate"
        } else {

            if(jugadaPc == "piedra" && jugadaUsuario == "papel"){
                resultado = "Ganaste"
            }


            if(jugadaPc == "piedra" && jugadaUsuario == "tijera"){
                resultado = "Perdiste"
            }

            if(jugadaPc == "papel" && jugadaUsuario == "piedra"){
                resultado = "Perdiste"
            }

            if(jugadaPc == "papel" && jugadaUsuario == "tijera"){
                resultado = "Ganaste"
            }

            if(jugadaPc == "tijera" && jugadaUsuario == "piedra"){
                resultado = "Ganaste"
            }

            if(jugadaPc == "tijera" && jugadaUsuario == "papel"){
                resultado = "Perdiste"
            }
        }

        console.log(resultado);
        mostrarResultado.value = resultado;

    } else {
        console.log("dentro del else")
        jugada.setCustomValidity('Jugada Incorrecta');
    }
}


