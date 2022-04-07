//part 1 - app with six functions: init, drawLine, stopDrawing, recordPointerLocation, handlePointerMove, handlePointerDown

//canvas and context let us manipulate the canvas, 4 coordinates helps us to track location of the pointer. 
let canvas, context, w, h, 
prevX = 0, currX = 0, prevY = 0, currY = 0,
draw = false;

function init() {
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.onpointermove = handlePointerMove;
    canvas.onpointerdown = handlePointerDown;
    canvas.onpointerup = stopDrawing;
    canvas.onpointerout = stopDrawing;
}

//draw the pointer path. It only runs if draw = true.
function drawLine() {
    let a = prevX;
    let b = prevY;
    let c = currX;
    let d = currY;

    context.lineWidth = 4;
    context.lineCap = "round";

    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(c, d);
    context.stroke();
    context.closePath();

}

// used by init when the pointer is not down (onpointerup) or is out of bounds (onpointerout).
function stopDrawing() {
    draw = false;
}

//tracks the pointer’s location and stores its coordinates
function recordPointerLocation(e) {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
}

//if draw = true, calls recordPointerLocation to get the path and drawLine to draw it.
function handlePointerMove(e) {
    if(draw) {
        recordPointerLocation(e);
        drawLine();
    }
}

