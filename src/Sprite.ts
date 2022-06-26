abstract class Sprite{

    private context: CanvasRenderingContext2D;

    constructor(){

        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        canvas.addEventListener("mouseup", this.mouseUp);
        this.context = context;

        
    }

    abstract mouseUp(event: MouseEvent): void;

    public getContext() : CanvasRenderingContext2D{

        return this.context;
    }
}