class Reglas{
   
    private ia:IA;
    private tablero: Tablero;
    private turno: TurnoEnum;
    private jugando: boolean = false;
    private turnoJugadorHumano: boolean = true;

    constructor(tablero: Tablero){        
        
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.addEventListener("mouseup", this.mouseUp);

        this.tablero = tablero;
        this.ia = new IA(tablero);
    }

    public inicializarJuego(): void {

        this.jugando = false;
        this.tablero.inicializarTablero();
        document.getElementById("mensaje").innerHTML = "";
    }

    public comenzarJuego(): void{
        
        this.jugando = true;
        this.turno = TurnoEnum.CIRCULO;
        this.turnoJugadorHumano= true;
    }

    public mouseUp = (event: MouseEvent) => {

        if(this.jugando && this.turnoJugadorHumano){

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
            }
        }
    }

    private cambiarTurno(): void{

        if(this.turno == TurnoEnum.CIRCULO){
            
            this.turno = TurnoEnum.CRUZ;
            this.turnoJugadorHumano = true;
        
            this.movimientoIA();

        }else if(this.turno == TurnoEnum.CRUZ){
            
            this.turno = TurnoEnum.CIRCULO;
            this.turnoJugadorHumano = false;
        }

        this.comprobarJugadaGanadora();
    }

    private movimientoIA(): void{

        let indiceArray = this.ia.getJugada();
        
        this.tablero.pintarCruz(indiceArray);
        this.cambiarTurno();

        this.turnoJugadorHumano = true;
        
    }
    private comprobarJugadaGanadora(): void{

        let hayJugadaGanadoraCirculo = this.tablero.comprobarJugadaGanadora(true);
        let hayJugadaGanadoraCruz = this.tablero.comprobarJugadaGanadora(false);

        if(hayJugadaGanadoraCirculo){
            
            this.jugando = false;
            document.getElementById("mensaje").innerHTML = "Has ganado"
        
        }else if(hayJugadaGanadoraCruz){
                
            this.jugando = false;
            document.getElementById("mensaje").innerHTML = "Has perdido"
        }
    }
}