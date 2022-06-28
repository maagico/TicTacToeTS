class Tablero extends Sprite {
    constructor() {
        super();
        this.ancho = 300;
        this.alto = 150;
        this.casillas = new Array(9);
        this.crearCasillas();
    }
    crearCasillas() {
        let x = 0;
        let y = 0;
        for (let i = 0; i < 9; i++) {
            this.casillas[i] = new Casilla(i, x * Constantes.ANCHO_CASILLA, y, Constantes.ANCHO_CASILLA, Constantes.ALTO_CASILLA);
            x++;
            if (x % 3 == 0) {
                x = 0;
                y += Constantes.ALTO_CASILLA;
            }
        }
    }
    inicializarTablero() {
        this.pintar(this.contexto);
        for (let i = 0; i < this.casillas.length; i++) {
            let casilla = this.casillas[i];
            casilla.inicializarCasilla();
        }
    }
    pintarCirculo(indiceArray) {
        let casilla = this.casillas[indiceArray];
        this.estaCasillaDesactivada = casilla === null || casilla === void 0 ? void 0 : casilla.estaDesactivada();
        if (!this.estaCasillaDesactivada) {
            casilla === null || casilla === void 0 ? void 0 : casilla.pintarCirculo();
            this.estaCasillaDesactivada = true;
        }
    }
    pintarCruz(indiceArray) {
        let casilla = this.casillas[indiceArray];
        this.estaCasillaDesactivada = casilla === null || casilla === void 0 ? void 0 : casilla.estaDesactivada();
        if (!this.estaCasillaDesactivada) {
            casilla === null || casilla === void 0 ? void 0 : casilla.pintarCruz();
            this.estaCasillaDesactivada = true;
        }
    }
    estaDesactivada(indiceArray) {
        let casilla = this.casillas[indiceArray];
        this.estaCasillaDesactivada = casilla === null || casilla === void 0 ? void 0 : casilla.estaDesactivada();
        return this.estaCasillaDesactivada;
    }
    getCasillas() {
        return this.casillas;
    }
    comprobarJugadaGanadora(circulo) {
        let numeroCasillasEncontradas = new Array();
        numeroCasillasEncontradas[0] = this.buscarJugadaGanadora([0, 1, 2], circulo);
        numeroCasillasEncontradas[1] = this.buscarJugadaGanadora([3, 4, 5], circulo);
        numeroCasillasEncontradas[2] = this.buscarJugadaGanadora([6, 7, 8], circulo);
        numeroCasillasEncontradas[3] = this.buscarJugadaGanadora([0, 3, 6], circulo);
        numeroCasillasEncontradas[4] = this.buscarJugadaGanadora([1, 4, 7], circulo);
        numeroCasillasEncontradas[5] = this.buscarJugadaGanadora([2, 5, 8], circulo);
        numeroCasillasEncontradas[6] = this.buscarJugadaGanadora([0, 4, 8], circulo);
        numeroCasillasEncontradas[7] = this.buscarJugadaGanadora([2, 4, 6], circulo);
        for (let i = 0; i < numeroCasillasEncontradas.length; i++) {
            let numero = numeroCasillasEncontradas[i];
            if (numero == 3) {
                return true;
            }
        }
        return false;
    }
    buscarJugadaGanadora(casillasABuscar, circulo) {
        let numeroCasillas = 0;
        for (let i = 0; i < casillasABuscar.length; i++) {
            let casilla = this.casillas[casillasABuscar[i]];
            if (circulo) {
                if (casilla.contieneCirculo()) {
                    numeroCasillas++;
                }
            }
            else {
                if (casilla.contieneCruz()) {
                    numeroCasillas++;
                }
            }
        }
        return numeroCasillas;
    }
    pintar(contexto) {
        contexto.lineWidth = 1;
        contexto.strokeStyle = "#000000";
        contexto.rect(0, 0, Constantes.ANCHO_TABLERO, Constantes.ALTO_TABLERO);
        contexto.stroke();
    }
}
