class Main{
    
    private reglas: Reglas = new Reglas(new Tablero());

    constructor(){
    
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