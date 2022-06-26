class Sprite {
    constructor() {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext("2d");
        canvas.addEventListener("mouseup", this.mouseUp);
        this.context = context;
    }
    getContext() {
        return this.context;
    }
}
