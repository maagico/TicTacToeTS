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

        let x:number = event.offsetX;
        let y:number = event.offsetY;

        x = Math.floor (x / Constantes.ANCHO_CASILLA);
        y = Math.floor (y / (Constantes.ALTO_CASILLA + 50));
        
        let indiceArray: number =  x + (y * 3);
        
        console.log("Indice "+indiceArray+", "+ x + ", " + y);
   }
}