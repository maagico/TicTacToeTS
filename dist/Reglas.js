class Reglas {
    constructor(tablero) {
        this.jugando = false;
        this.turnoJugadorHumano = true;
        this.hayJugadaGanadora = false;
        this.mouseUp = (event) => {
            if (this.jugando && this.turnoJugadorHumano) {
                let x = event.offsetX;
                let y = event.offsetY;
                x = Math.floor(x / Constantes.ANCHO_CASILLA);
                y = Math.floor(y / (Constantes.ALTO_CASILLA + 50));
                let indiceArray = x + (y * Constantes.NUMERO_CASILLAS_ANCHO);
                if (this.turno == 0 /* CIRCULO */) {
                    let estaSeleccionada = this.tablero.estaDesactivada(indiceArray);
                    if (!estaSeleccionada) {
                        this.tablero.pintarCirculo(indiceArray);
                        this.cambiarTurno();
                    }
                }
            }
        };
        let canvas = document.getElementById('canvas');
        canvas.addEventListener("mouseup", this.mouseUp);
        this.tablero = tablero;
        this.ia = new IA(tablero);
    }
    inicializarJuego() {
        this.jugando = false;
        this.tablero.inicializarTablero();
        document.getElementById("mensaje").innerHTML = "";
    }
    comenzarJuego() {
        this.jugando = true;
        this.turno = 0 /* CIRCULO */;
        this.turnoJugadorHumano = true;
        this.hayJugadaGanadora = false;
    }
    cambiarTurno() {
        this.comprobarJugadaGanadora();
        if (this.turno == 0 /* CIRCULO */) {
            this.turno = 1 /* CRUZ */;
            this.turnoJugadorHumano = true;
            if (!this.hayJugadaGanadora) {
                this.movimientoIA();
            }
        }
        else if (this.turno == 1 /* CRUZ */) {
            this.turno = 0 /* CIRCULO */;
            this.turnoJugadorHumano = false;
        }
    }
    movimientoIA() {
        let indiceArray = this.ia.getJugada();
        this.tablero.pintarCruz(indiceArray);
        this.cambiarTurno();
        this.turnoJugadorHumano = true;
    }
    comprobarJugadaGanadora() {
        let hayJugadaGanadoraCirculo = this.tablero.comprobarJugadaGanadora(true);
        let hayJugadaGanadoraCruz = this.tablero.comprobarJugadaGanadora(false);
        if (hayJugadaGanadoraCirculo) {
            this.hayJugadaGanadora = true;
            this.jugando = false;
            document.getElementById("mensaje").innerHTML = "Has ganado";
        }
        else if (hayJugadaGanadoraCruz) {
            this.hayJugadaGanadora = true;
            this.jugando = false;
            document.getElementById("mensaje").innerHTML = "Has perdido";
        }
    }
}
