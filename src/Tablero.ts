class Tablero extends Sprite{

     private ancho: number = 300;
     private alto: number = 150;

     private casillas: Array<Casilla> = new Array(9);
     
     constructor(){

          super();
          this.crearCasillas();
     }
 
     private crearCasillas(): void{
          
          let x: number = 0;
          let y: number = 0;

          for(let i = 0; i < 9; i++){

               this.casillas[i] = new Casilla(i, x * Constantes.ANCHO_CASILLA, y, Constantes.ANCHO_CASILLA, Constantes.ALTO_CASILLA);
              
               x++;  

               if(x % 3 == 0){
                    x = 0
                    y += Constantes.ALTO_CASILLA; 
               }
          } 
     }
 
     public inicializarJuego() {
          
          this.pintar(this.contexto);

          for(let i = 0; i < this.casillas.length; i++){

               let casilla = this.casillas[i];
               casilla.inicializarCasilla();
          } 

     }

     public pintar(contexto: CanvasRenderingContext2D) : void {

          contexto.lineWidth = 1;
          contexto.strokeStyle = "#000000";
          contexto.rect(0, 0, Constantes.ANCHO_TABLERO, Constantes.ALTO_TABLERO);
          contexto.stroke();
     }
} 

