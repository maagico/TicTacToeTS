class Eventos {
    constructor() {
        this.mouseUp = (e) => { };
        let canvas = document.getElementById('canvas');
        canvas.addEventListener("mouseup", this.mouseUp);
    }
}
