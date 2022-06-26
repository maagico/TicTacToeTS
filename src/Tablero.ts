class Tablero extends Sprite{
    
     private ancho: number = 300;
     private alto: number = 300;

     private casillas: Array<Casilla> = new Array(9);
     
     constructor(){

          super();
     }

     private crearCasillas(){
          
          for(let i = 0; i < this.casillas.length; i++){

               this.casillas[i] = new Casilla(i); 
          } 
     }

     
    public mouseUp(event: MouseEvent): void {    

          let x = event.offsetX;
          let y = event.offsetY;

          console.log(x + " " + y);
     }

     public inicializarJuego() {
          
          for(let i = 0; i < this.casillas.length; i++){

               let casilla = this.casillas[i];
               casilla.inicializarCasilla(); 
          } 
      }
}    