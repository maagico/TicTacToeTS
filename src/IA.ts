class IA{//Mucho de artificial, poco de inteligente
    
    private tablero: Tablero;

    constructor(tablero: Tablero){

        this.tablero = tablero;
    }

    public getJugada(): number{

        let casillas: Casilla[] = this.tablero.getCasillas();

        let casillaSeleccionada: number = -1;

        if(!casillas[4].estaDesactivada()){
            
            casillaSeleccionada = 4;
            
            return casillaSeleccionada;

        }else{
                   
            casillaSeleccionada = this.jugadaHorizontal(true);

            if(casillaSeleccionada != -1){
                
                return casillaSeleccionada;

            }

            casillaSeleccionada = this.jugadaVertical(true);
                
            if(casillaSeleccionada != -1){
            
                return casillaSeleccionada;

            }

            casillaSeleccionada = this.jugadasEnDiagonal(true);
                
            if(casillaSeleccionada != -1){
            
                return casillaSeleccionada;

            }

            casillaSeleccionada = this.jugadaHorizontal(false);

            if(casillaSeleccionada != -1){
                
                return casillaSeleccionada;

            }

            casillaSeleccionada = this.jugadaVertical(false);
                
            if(casillaSeleccionada != -1){
            
                return casillaSeleccionada;

            }

            casillaSeleccionada = this.jugadasEnDiagonal(false);
                
            if(casillaSeleccionada != -1){
            
                return casillaSeleccionada;

            }

            let posiblesEsquinas: number[] = [0, 2, 6, 8];

            casillaSeleccionada = this.getCasillaLibre([0, 2, 6, 8]);
            
            if(casillaSeleccionada != -1){
                
                return casillaSeleccionada;
            }
            
            casillaSeleccionada = this.getCasillaLibre([0, 1, 2, 3, 4, 5, 6, 7, 8]);

            return casillaSeleccionada ;
        }  
    }

    private jugadaHorizontal(jugada: boolean) : number{
        
        let casillasSeleccionadas: number[] = new Array();
        let numeroCasillasSelecionadas = -1;

        casillasSeleccionadas[0] = this.jugada([0, 1, 2], jugada);
        casillasSeleccionadas[1] = this.jugada([3, 4, 5], jugada);
        casillasSeleccionadas[2] = this.jugada([6, 7, 8], jugada);
              
        return this.comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas);
    }

    private jugadaVertical(jugada: boolean) : number{
        
        let casillasSeleccionadas: number[] = new Array();
        let numeroCasillasSelecionadas = -1;

        casillasSeleccionadas[0] = this.jugada([0, 3, 6], jugada);
        casillasSeleccionadas[1] = this.jugada([1, 4, 7], jugada);
        casillasSeleccionadas[2] = this.jugada([2, 5, 8], jugada);
              
        return this.comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas);
    }

    private jugadasEnDiagonal(jugada: boolean) : number{
        
        let casillasSeleccionadas: number[] = new Array();
        let numeroCasillasSelecionadas = -1;

        casillasSeleccionadas[0] = this.jugada([0, 4, 8], jugada);
        casillasSeleccionadas[1] = this.jugada([2, 4, 6], jugada);

        return this.comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas);
    }

    private comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas: number[]) : number{

        let casillaSeleccionada: number[] = new Array();
        let numeroCasillasSelecionadas = -1;

        for (let i = 0; i < casillasSeleccionadas.length; i++) {
            
            numeroCasillasSelecionadas = casillasSeleccionadas[i];

            if(numeroCasillasSelecionadas != -1){

                return numeroCasillasSelecionadas;
            }            
    
        }

        return numeroCasillasSelecionadas;
    }

    private jugada(casillasAbuscar: number[], jugada: boolean) : number{

        let casillas: Casilla[] = this.tablero.getCasillas();
 
        let dosSeguidos: number = 0;
        let casillaElegida: number = -1;

        for(let i:number = 0; i < casillasAbuscar.length; i++){
            
            let casilla: Casilla = casillas[casillasAbuscar[i]]; 
            
            if(jugada){

                if(casilla.contieneCruz() && casilla.estaDesactivada()){
                
                    dosSeguidos++;
                }

            }else{

                if(casilla.contieneCirculo() && casilla.estaDesactivada()){
                
                    dosSeguidos++;
                }
            }
        } 
  
        if(dosSeguidos == 2){ 

            for(let i: number = 0; i < casillasAbuscar.length; i++){
                
                let casilla: Casilla = casillas[casillasAbuscar[i]];  

                if(jugada){
                    
                    if(!casilla.contieneCruz() && !casilla.estaDesactivada()){

                        casillaElegida = casilla.getIndice();
                    }

                }else{ 
                    
                    if(!casilla.contieneCirculo() && !casilla.estaDesactivada()){

                        casillaElegida = casilla.getIndice();
                    } 
                }
            } 
        }     
 
        return casillaElegida;
    } 

    private getCasillaLibre(posiblesCasillasLibres: number[]): number {

        let casillas: Casilla[] = this.tablero.getCasillas();

        let casillaSeleccioanda: number = -1;
        let hayLibres: boolean = false;

        for(let i = 0; i < posiblesCasillasLibres.length; i++){
            
            if(!casillas[posiblesCasillasLibres[i]].estaDesactivada()){

                hayLibres = true;
            }
        }

        if(!hayLibres){

            return casillaSeleccioanda;
        }

        let buscarEsquinaLibre: boolean = true;
                
        while(buscarEsquinaLibre){

            let esquina = this.getNumeroAleatorio(0, 3);
            
            if(!casillas[posiblesCasillasLibres[esquina]].estaDesactivada()){

                casillaSeleccioanda = casillas[posiblesCasillasLibres[esquina]].getIndice();
                buscarEsquinaLibre = false;
            }
        }

        return casillaSeleccioanda;
     }

     private getNumeroAleatorio(minimo: number, maximo: number) {

        return Math.round(Math.random() * (maximo - minimo) + minimo);
     }
}