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
        console.log(x + " " + y);
    }
}
