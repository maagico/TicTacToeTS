class Main{
    
    private reglas: Reglas = new Reglas(new Tablero());

    constructor(){
    
        let reglas = this.reglas;

        const botonComenzar = document.getElementById('comenzar');
        botonComenzar.addEventListener("click", () => {

                reglas.inicializarJuego();
                reglas.comenzarJuego();
            }); 
    }
}

new Main();