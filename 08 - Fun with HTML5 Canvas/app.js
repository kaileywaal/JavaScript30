const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

//resize canvas to fill window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let strokewidth = 1;
let strokewidthDirection = 'grow';

function draw(e) {
    ctx.lineWidth = strokewidth;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    //change hue
    hue++;
    if (strokewidth === 50){
        strokewidthDirection = 'shrink';
    } 
    if (strokewidth === 1) {
        strokewidthDirection = 'grow';
    }
    strokewidthDirection === 'grow' ? strokewidth++ : strokewidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
