class IA {
    constructor(tablero) {
        this.tablero = tablero;
    }
    getJugada() {
        let casillas = this.tablero.getCasillas();
        let casillaSeleccionada = -1;
        if (!casillas[4].estaDesactivada()) {
            casillaSeleccionada = 4;
            return casillaSeleccionada;
        } 
        else {
            casillaSeleccionada = this.jugadaHorizontal(true);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            casillaSeleccionada = this.jugadaVertical(true);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            casillaSeleccionada = this.jugadasEnDiagonal(true);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            casillaSeleccionada = this.jugadaHorizontal(false);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            casillaSeleccionada = this.jugadaVertical(false);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            casillaSeleccionada = this.jugadasEnDiagonal(false);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            let posiblesEsquinas = [0, 2, 6, 8];
            casillaSeleccionada = this.getCasillaLibre([0, 2, 6, 8]);
            if (casillaSeleccionada != -1) {
                return casillaSeleccionada;
            }
            casillaSeleccionada = this.getCasillaLibre([0, 1, 2, 3, 4, 5, 6, 7, 8]);
            return casillaSeleccionada;
        }
    }
    jugadaHorizontal(jugada) {
        let casillasSeleccionadas = new Array();
        let numeroCasillasSelecionadas = -1;
        casillasSeleccionadas[0] = this.jugada([0, 1, 2], jugada);
        casillasSeleccionadas[1] = this.jugada([3, 4, 5], jugada);
        casillasSeleccionadas[2] = this.jugada([6, 7, 8], jugada);
        return this.comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas);
    }
    jugadaVertical(jugada) {
        let casillasSeleccionadas = new Array();
        let numeroCasillasSelecionadas = -1;
        casillasSeleccionadas[0] = this.jugada([0, 3, 6], jugada);
        casillasSeleccionadas[1] = this.jugada([1, 4, 7], jugada);
        casillasSeleccionadas[2] = this.jugada([2, 5, 8], jugada);
        return this.comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas);
    }
    jugadasEnDiagonal(jugada) {
        let casillasSeleccionadas = new Array();
        let numeroCasillasSelecionadas = -1;
        casillasSeleccionadas[0] = this.jugada([0, 4, 8], jugada);
        casillasSeleccionadas[1] = this.jugada([2, 4, 6], jugada);
        return this.comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas);
    }
    comprobarNumeroCasillasSeleccionadas(casillasSeleccionadas) {
        let casillaSeleccionada = new Array();
        let numeroCasillasSelecionadas = -1;
        for (let i = 0; i < casillasSeleccionadas.length; i++) {
            numeroCasillasSelecionadas = casillasSeleccionadas[i];
            if (numeroCasillasSelecionadas != -1) {
                return numeroCasillasSelecionadas;
            }
        }
        return numeroCasillasSelecionadas;
    }
    jugada(casillasAbuscar, jugada) {
        let casillas = this.tablero.getCasillas();
        let dosSeguidos = 0;
        let casillaElegida = -1;
        for (let i = 0; i < casillasAbuscar.length; i++) {
            let casilla = casillas[casillasAbuscar[i]];
            if (jugada) {
                if (casilla.contieneCruz() && casilla.estaDesactivada()) {
                    dosSeguidos++;
                }
            }
            else {
                if (casilla.contieneCirculo() && casilla.estaDesactivada()) {
                    dosSeguidos++;
                }
            }
        }
        if (dosSeguidos == 2) {
            for (let i = 0; i < casillasAbuscar.length; i++) {
                let casilla = casillas[casillasAbuscar[i]];
                if (jugada) {
                    if (!casilla.contieneCruz() && !casilla.estaDesactivada()) {
                        casillaElegida = casilla.getIndice();
                    }
                }
                else {
                    if (!casilla.contieneCirculo() && !casilla.estaDesactivada()) {
                        casillaElegida = casilla.getIndice();
                    }
                }
            }
        }
        return casillaElegida;
    }
    getCasillaLibre(posiblesCasillasLibres) {
        let casillas = this.tablero.getCasillas();
        let casillaSeleccioanda = -1;
        let hayLibres = false;
        for (let i = 0; i < posiblesCasillasLibres.length; i++) {
            if (!casillas[posiblesCasillasLibres[i]].estaDesactivada()) {
                hayLibres = true;
            }
        }
        if (!hayLibres) {
            return casillaSeleccioanda;
        }
        let buscarEsquinaLibre = true;
        while (buscarEsquinaLibre) {
            let esquina = this.getNumeroAleatorio(0, 3);
            if (!casillas[posiblesCasillasLibres[esquina]].estaDesactivada()) {
                casillaSeleccioanda = casillas[posiblesCasillasLibres[esquina]].getIndice();
                buscarEsquinaLibre = false;
            }
        }
        return casillaSeleccioanda;
    }
    getNumeroAleatorio(minimo, maximo) {
        return Math.round(Math.random() * (maximo - minimo) + minimo);
    }
}
