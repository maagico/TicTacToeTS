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
 
     public inicializarTablero(): void {
          
          this.pintar(this.contexto);

          for(let i = 0; i < this.casillas.length; i++){

               let casilla = this.casillas[i];
               casilla.inicializarCasilla();
          } 

     }

     public pintarCirculo(indiceArray: number): void {
     
          let casilla: Casilla = this.casillas[indiceArray];
          this.estaCasillaDesactivada = casilla?.estaDesactivada();
          
          if(!this.estaCasillaDesactivada){

               casilla?.pintarCirculo();
               this.estaCasillaDesactivada = true;
          }
      }
  
      public pintarCruz(indiceArray: number): void {
          
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

      public comprobarJugadaGanadora(circulo: boolean): boolean {

          let numeroCasillasEncontradas: number[] = new Array(); 

          numeroCasillasEncontradas[0] = this.buscarJugadaGanadora([0, 1, 2], circulo);
          numeroCasillasEncontradas[1] = this.buscarJugadaGanadora([3, 4, 5], circulo);
          numeroCasillasEncontradas[2] = this.buscarJugadaGanadora([6, 7, 8], circulo);
          numeroCasillasEncontradas[3] = this.buscarJugadaGanadora([0, 3, 6], circulo);
          numeroCasillasEncontradas[4] = this.buscarJugadaGanadora([1, 4, 7], circulo);
          numeroCasillasEncontradas[5] = this.buscarJugadaGanadora([2, 5, 8], circulo);
          numeroCasillasEncontradas[6] = this.buscarJugadaGanadora([0, 4, 8], circulo);
          numeroCasillasEncontradas[7] = this.buscarJugadaGanadora([2, 4, 6], circulo);
          
          for(let i = 0;i < numeroCasillasEncontradas.length; i++){

               let numero = numeroCasillasEncontradas[i];
               if(numero == 3){

                    return true;
               }
          }

          return false;
      }


      private buscarJugadaGanadora(casillasABuscar: number[], circulo: boolean): number{

          let numeroCasillas: number = 0;

          for(let i = 0; i < casillasABuscar.length; i++){
               
               let casilla: Casilla = this.casillas[casillasABuscar[i]];

               if(circulo){
                    
                    if(casilla.contieneCirculo()){
                         
                         numeroCasillas++;
                    } 

               }else{

                    if(casilla.contieneCruz()){
                         
                         numeroCasillas++;
                    } 
               }
          }

          return numeroCasillas;
      }

     public pintar(contexto: CanvasRenderingContext2D) : void {

          contexto.lineWidth = 1;
          contexto.strokeStyle = "#000000";
          contexto.rect(0, 0, Constantes.ANCHO_TABLERO, Constantes.ALTO_TABLERO);
          contexto.stroke();
     }
} 

