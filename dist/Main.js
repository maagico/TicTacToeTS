class Main {
    constructor() {
        this.reglas = new Reglas(new Tablero());
        let reglas = this.reglas;
        reglas.inicializarJuego();
        reglas.comenzarJuego();
        const botonComenzar = document.getElementById('resetear');
        botonComenzar.addEventListener("click", () => {
            reglas.inicializarJuego();
            reglas.comenzarJuego();
        });
    }
}
new Main();
