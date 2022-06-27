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
        let ancho = 100;
        let alto = 50;
        for (let i = 0; i < 9; i++) {
            this.casillas[i] = new Casilla(i, x * ancho, y, ancho, alto);
            x++;
            if (x % 3 == 0) {
                x = 0;
                y += alto;
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
        contexto.rect(0, 0, this.ancho, this.alto);
        contexto.stroke();
    }
}
