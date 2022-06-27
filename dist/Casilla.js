class Casilla extends Sprite {
    constructor(indice, x, y, ancho, alto) {
        super();
        this.casillaDesactivada = false;
        this.esCirculo = false;
        this.esCruz = false;
        this.indice = indice;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }
    inicializarCasilla() {
        this.casillaDesactivada = false;
        this.esCirculo = false;
        this.esCruz = false;
        this.pintar(this.contexto);
    }
    pintarCirculo() {
        this.esCirculo = true;
        this.casillaDesactivada = true;
        this.pintar(this.contexto);
    }
    pintarCruz() {
        this.esCruz = true;
        this.casillaDesactivada = true;
        this.pintar(this.contexto);
    }
    estaDesactivada() {
        return this.casillaDesactivada;
    }
    resetear() {
        this.esCirculo = false;
        this.esCruz = false;
        this.casillaDesactivada = false;
        this.pintar(this.contexto);
    }
    pintar(contexto) {
        contexto.lineWidth = 1;
        contexto.strokeStyle = "gray";
        contexto.rect(this.x, this.y, this.ancho, this.alto);
        contexto.stroke();
        if (this.casillaDesactivada) {
            if (this.esCirculo) {
                let circuloNegro = document.getElementById("circulo-negro");
                contexto.drawImage(circuloNegro, this.x, this.y, 100, 50);
                this.casillaDesactivada = true;
            }
            else if (this.esCruz) {
                let cruzNegra = document.getElementById("cruz-negra");
                contexto.drawImage(cruzNegra, this.x, this.y, 100, 50);
                this.casillaDesactivada = true;
            }
        }
    }
}
