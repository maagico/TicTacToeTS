class Main {
    constructor() {
        this.reglas = new Reglas(new Tablero());
        let reglas = this.reglas;
        const botonComenzar = document.getElementById('comenzar');
        botonComenzar.addEventListener("click", () => {
            reglas.inicializarJuego();
            reglas.comenzarJuego();
        });
    }
}
new Main();
