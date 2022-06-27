class Reglas extends Eventos {
    constructor(tablero) {
        super();
        this.tablero = tablero;
    }
    inicializarJuego() {
        this.tablero.inicializarJuego();
    }
    mouseUp(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        x = Math.floor(x / Constantes.ANCHO_CASILLA);
        y = Math.floor(y / (Constantes.ALTO_CASILLA + 50));
        let indiceArray = x + (y * 3);
        console.log("Indice " + indiceArray + ", " + x + ", " + y);
    }
}
