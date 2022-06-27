class Reglas {
    constructor(tablero) {
        this.jugando = false;
        this.mouseUp = (event) => {
            if (this.jugando) {
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
                else if (this.turno == 1 /* CRUZ */) {
                    let estaSeleccionada = this.tablero.estaDesactivada(indiceArray);
                    if (!estaSeleccionada) {
                        this.tablero.pintarCruz(indiceArray);
                        this.cambiarTurno();
                    }
                }
                console.log("Indice " + indiceArray + ", " + x + ", " + y);
            }
        };
        let canvas = document.getElementById('canvas');
        canvas.addEventListener("mouseup", this.mouseUp);
        this.tablero = tablero;
    }
    inicializarJuego() {
        this.jugando = false;
        this.tablero.inicializarTablero();
    }
    comenzarJuego() {
        this.jugando = true;
        this.turno = 0 /* CIRCULO */;
    }
    cambiarTurno() {
        if (this.turno == 0 /* CIRCULO */) {
            this.turno = 1 /* CRUZ */;
        }
        else if (this.turno == 1 /* CRUZ */) {
            this.turno = 0 /* CIRCULO */;
        }
    }
}
