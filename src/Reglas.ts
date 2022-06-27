class Reglas extends Eventos{
    
    private tablero : Tablero;

    constructor(tablero: Tablero){        
        
        super();
        
        this.tablero = tablero;
    }

    public inicializarJuego(): void {
    
        this.tablero.inicializarJuego();
    }

    public mouseUp(event: MouseEvent): void {    

        let x = event.offsetX;
        let y = event.offsetY;

        console.log(x + " " + y);
   }
}