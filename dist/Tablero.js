class Tablero extends Sprite {
    constructor() {
        super();
        this.ancho = 300;
        this.alto = 300;
        this.casillas = new Array(9);
    }
    crearCasillas() {
        for (let i = 0; i < this.casillas.length; i++) {
            this.casillas[i] = new Casilla(i);
        }
    }
    mouseUp(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        console.log(x + " " + y);
    }
    inicializarJuego() {
        for (let i = 0; i < this.casillas.length; i++) {
            let casilla = this.casillas[i];
            casilla.inicializarCasilla();
        }
    }
}
