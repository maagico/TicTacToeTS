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
    inicializarJuego() {
        this.pintar(this.contexto);
        for (let i = 0; i < this.casillas.length; i++) {
            let casilla = this.casillas[i];
            casilla.inicializarCasilla();
        }
    }
    pintar(contexto) {
        contexto.lineWidth = 1;
        contexto.strokeStyle = "#000000";
        contexto.rect(0, 0, Constantes.ANCHO_TABLERO, Constantes.ALTO_TABLERO);
        contexto.stroke();
    }
}
