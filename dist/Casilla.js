class Casilla extends Sprite {
    constructor(indice, x, y, ancho, alto) {
        super();
        this.casillaSeleccionada = false;
        this.esCirculo = false;
        this.esCruz = false;
        this.indice = indice;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }
    inicializarCasilla() {
        this.casillaSeleccionada = false;
        this.esCirculo = false;
        this.esCruz = false;
        this.pintar(this.contexto);
    }
    pintarCirculo() {
        this.esCirculo = true;
        this.casillaSeleccionada = true;
        this.pintar(this.contexto);
    }
    pintarCruz() {
        this.esCruz = true;
        this.casillaSeleccionada = true;
        this.pintar(this.contexto);
    }
    estaSeleccionada() {
        return this.casillaSeleccionada;
    }
    resetear() {
        this.casillaSeleccionada = false;
    }
    pintar(contexto) {
        contexto.lineWidth = 1;
        contexto.strokeStyle = "gray";
        contexto.rect(this.x, this.y, this.ancho, this.alto);
        contexto.stroke();
        if (this.estaSeleccionada) {
            if (this.esCirculo) {
            }
            else if (this.esCruz) {
            }
        }
    }
}
