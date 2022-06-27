class Casilla extends Sprite{

    private indice : number;

    private x: number;
    private y: number;
    private ancho: number;
    private alto: number;

    private casillaDesactivada: boolean = false;
    private borrarCasilla: boolean;

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
        
        this.casillaDesactivada = false;
        this.esCirculo = false;
        this.esCruz = false;
        this.borrarCasilla = true;

        this.pintar(this.contexto);
    }

    public pintarCirculo(): void{

        this.esCirculo = true;
        this.casillaDesactivada = true;
        this.pintar(this.contexto);       
    }

    public pintarCruz(): void{
        
        this.esCruz = true;
        this.casillaDesactivada = true;
        this.pintar(this.contexto);        
    }

    public estaDesactivada(): boolean{
     
        return this.casillaDesactivada;
    }

    public pintar(contexto: CanvasRenderingContext2D) : void {
         
        contexto.lineWidth = 1;
        contexto.strokeStyle = "gray";
        contexto.rect(this.x, this.y, this.ancho, this.alto);
        contexto.stroke();

        if(this.casillaDesactivada && !this.borrarCasilla){

            if(this.esCirculo){

                let circuloNegro : any  = document.getElementById("circulo-negro");
                contexto.drawImage(circuloNegro,this.x, this.y, 100, 50);

            }else if(this.esCruz){
                
                let cruzNegra : any  = document.getElementById("cruz-negra");
                contexto.drawImage(cruzNegra,this.x, this.y, 100, 50);

            }
        }else{

            contexto.clearRect(this.x, this.y, 100, 50);
            this.borrarCasilla = false;
        }
    }
}