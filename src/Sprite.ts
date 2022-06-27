abstract class Sprite{

    protected contexto : CanvasRenderingContext2D;

    constructor(){

        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.contexto = canvas.getContext("2d");
    }

    abstract pintar(contexto : CanvasRenderingContext2D) : void;
}