abstract class Eventos{

    private context: CanvasRenderingContext2D;

    constructor(){

        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.addEventListener("mouseup", this.mouseUp);        
    }

    abstract mouseUp(event: MouseEvent): void;
}