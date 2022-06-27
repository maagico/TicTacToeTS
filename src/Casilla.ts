class Casilla extends Sprite{

    private indice : number;

    private x: number;
    private y: number;
    private ancho: number;
    private alto: number;

    private casillaSeleccionada: boolean = false;

    private esCirculo: boolean = false;
    private esCruz: boolean = false;
    

    constructor(indice: number, x: number, y: number, ancho: number, alto: number){
        
        super();

        this.indice = indice;

        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }

    public inicializarCasilla(): void {
        
        this.casillaSeleccionada = false;
        this.esCirculo = false;
        this.esCruz = false;

        this.pintar(this.contexto);
    }

    public pintarCirculo(): void{

        this.esCirculo = true;
        this.casillaSeleccionada = true;
        this.pintar(this.contexto);       
    }

    public pintarCruz(): void{
        
        this.esCruz = true;
        this.casillaSeleccionada = true;
        this.pintar(this.contexto);        
    }

    public estaSeleccionada(): boolean{

        return this.casillaSeleccionada;
    }

    public resetear(): void{

        this.esCirculo = false;
        this.esCruz = false;
        this.casillaSeleccionada = false;
        
        this.pintar(this.contexto);  
    }

    public pintar(contexto: CanvasRenderingContext2D) : void {
         
        contexto.lineWidth = 1;
        contexto.strokeStyle = "gray";
        contexto.rect(this.x, this.y, this.ancho, this.alto);
        contexto.stroke();

        if(this.estaSeleccionada){

            if(this.esCirculo){


            }else if(this.esCruz){


            }
        }
    }
}