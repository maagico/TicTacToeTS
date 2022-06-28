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
    jugadaHorizontal(jugadaGanadora) {
        let casillaSeleccionada = this.jugada([0, 1, 2], jugadaGanadora);
        if (casillaSeleccionada == -1) {
            casillaSeleccionada = this.jugada([3, 4, 5], jugadaGanadora);
            if (casillaSeleccionada == -1) {
                casillaSeleccionada = this.jugada([6, 7, 8], jugadaGanadora);
            }
        }
        return casillaSeleccionada;
    }
    jugadaVertical(jugadaGanadora) {
        let casillaSeleccionada = this.jugada([0, 3, 6], jugadaGanadora);
        if (casillaSeleccionada == -1) {
            casillaSeleccionada = this.jugada([1, 4, 7], jugadaGanadora);
            if (casillaSeleccionada == -1) {
                casillaSeleccionada = this.jugada([2, 5, 8], jugadaGanadora);
            }
        }
        return casillaSeleccionada;
    }
    jugadasEnDiagonal(jugadaGanadora) {
        let casillaSeleccionada = this.jugada([0, 4, 8], jugadaGanadora);
        if (casillaSeleccionada == -1) {
            casillaSeleccionada = this.jugada([2, 4, 6], jugadaGanadora);
        }
        return casillaSeleccionada;
    }
    jugada(casillasABloquear, jugadaGanadora) {
        let casillas = this.tablero.getCasillas();
        let dosSeguidos = 0;
        let bloquearCasilla = -1;
        for (let i = 0; i < casillasABloquear.length; i++) {
            let casilla = casillas[casillasABloquear[i]];
            if (jugadaGanadora) {
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
            for (let i = 0; i < casillasABloquear.length; i++) {
                let casilla = casillas[casillasABloquear[i]];
                if (jugadaGanadora) {
                    if (!casilla.contieneCruz() && !casilla.estaDesactivada()) {
                        bloquearCasilla = casilla.getIndice();
                    }
                }
                else {
                    if (!casilla.contieneCirculo() && !casilla.estaDesactivada()) {
                        bloquearCasilla = casilla.getIndice();
                    }
                }
            }
        }
        return bloquearCasilla;
    }
    getCasillaLibre(posiblesEsquinas) {
        let casillas = this.tablero.getCasillas();
        let casillaSeleccioanda = -1;
        let hayLibres = false;
        for (let i = 0; i < posiblesEsquinas.length; i++) {
            if (!casillas[posiblesEsquinas[i]].estaDesactivada()) {
                hayLibres = true;
            }
        }
        if (!hayLibres) {
            return casillaSeleccioanda;
        }
        let buscarEsquinaLibre = true;
        while (buscarEsquinaLibre) {
            let esquina = this.getNumeroAleatorio(0, 3);
            if (!casillas[posiblesEsquinas[esquina]].estaDesactivada()) {
                casillaSeleccioanda = casillas[posiblesEsquinas[esquina]].getIndice();
                buscarEsquinaLibre = false;
            }
        }
        return casillaSeleccioanda;
    }
    getNumeroAleatorio(minimo, maximo) {
        return Math.round(Math.random() * (maximo - minimo) + minimo);
    }
}
