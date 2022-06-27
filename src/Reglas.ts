class Reglas{
        
    private tablero: Tablero;
    private turno: TurnoEnum;
    private jugando: boolean = false;

    constructor(tablero: Tablero){        
        
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.addEventListener("mouseup", this.mouseUp);

        this.tablero = tablero;
    }

    public inicializarJuego(): void {

        this.jugando = false;
        this.tablero.inicializarTablero();
    }

    public comenzarJuego(): void{
        
        this.jugando = true;
        this.turno = TurnoEnum.CIRCULO
    }

    public mouseUp = (event: MouseEvent) => {

        if(this.jugando){

            let x:number = event.offsetX;
            let y:number = event.offsetY;

            x = Math.floor (x / Constantes.ANCHO_CASILLA);
            y = Math.floor (y / (Constantes.ALTO_CASILLA + 50));
            
            let indiceArray: number =  x + (y * Constantes.NUMERO_CASILLAS_ANCHO);
            
            if(this.turno == TurnoEnum.CIRCULO){

                let estaSeleccionada = this.tablero.estaDesactivada(indiceArray);
                if(!estaSeleccionada){

                this.tablero.pintarCirculo(indiceArray);
                
                this.cambiarTurno();

                }

            }else if(this.turno == TurnoEnum.CRUZ){

                let estaSeleccionada = this.tablero.estaDesactivada(indiceArray);
                if(!estaSeleccionada){

                this.tablero.pintarCruz(indiceArray);
                
                this.cambiarTurno();

                }
            }

            console.log("Indice "+indiceArray+", "+ x + ", " + y);
        }
    }

    private cambiarTurno(): void{

        if(this.turno == TurnoEnum.CIRCULO){
            
            this.turno = TurnoEnum.CRUZ;
        
        }else if(this.turno == TurnoEnum.CRUZ){
            
            this.turno = TurnoEnum.CIRCULO;
        }

    }
}