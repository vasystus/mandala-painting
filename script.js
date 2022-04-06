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
