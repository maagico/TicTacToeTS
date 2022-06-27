class Tablero extends Sprite{
   
     
     private ancho: number = 300;
     private alto: number = 150;
     private estaCasillaDesactivada: boolean;
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
 
     public inicializarTablero() {
          
          this.pintar(this.contexto);

          for(let i = 0; i < this.casillas.length; i++){

               let casilla = this.casillas[i];
               casilla.inicializarCasilla();
          } 

     }

     public pintarCirculo(indiceArray: number){
     
          let casilla: Casilla = this.casillas[indiceArray];
          this.estaCasillaDesactivada = casilla?.estaDesactivada();
          
          if(!this.estaCasillaDesactivada){

               casilla?.pintarCirculo();
               this.estaCasillaDesactivada = true;
          }
      }
  
      public pintarCruz(indiceArray: number){
          
          let casilla: Casilla = this.casillas[indiceArray];
          this.estaCasillaDesactivada = casilla?.estaDesactivada();
          
          if(!this.estaCasillaDesactivada){
               
               casilla?.pintarCruz();
               this.estaCasillaDesactivada = true;
          }
      }

      public estaDesactivada(indiceArray: number): boolean{
          
          let casilla: Casilla = this.casillas[indiceArray];
          this.estaCasillaDesactivada = casilla?.estaDesactivada();

          return this.estaCasillaDesactivada;
      }

      public getCasillas(): Casilla[]{

          return this.casillas;
      }

     public pintar(contexto: CanvasRenderingContext2D) : void {

          contexto.lineWidth = 1;
          contexto.strokeStyle = "#000000";
          contexto.rect(0, 0, Constantes.ANCHO_TABLERO, Constantes.ALTO_TABLERO);
          contexto.stroke();
     }
} 

