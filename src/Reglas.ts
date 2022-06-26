class Reglas{
    
    tablero : Tablero;

    constructor(tablero: Tablero){        
    
        this.tablero = tablero;
    }

    public inicializarJuego(): void {
    
        this.tablero.inicializarJuego();
    }
}