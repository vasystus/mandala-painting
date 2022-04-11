//start - app with six functions: init, drawLine, stopDrawing, recordPointerLocation, handlePointerMove, handlePointerDown

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
    document.querySelector(".clear").onclick = clearCanvas;
}

//draw the pointer path. It only runs if draw = true.
function drawLine() {
    let a = prevX, a_ = a,
        b = prevY, b_ = h-b,
        c = currX, c_ = c,
        d = currY, d_ = h-d;
       
    context.strokeStyle = getColor();
    context.lineWidth = 4;
    context.lineCap = "round";
    
    context.beginPath();
    //draw line 1
    context.moveTo(a, b);
    context.lineTo(c, d);
    //draw line 2 (mirrow line 1)
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);
    //reassign values and draw the 3rd line
    a_ = w-a; b_ = b;
    c_ = w-c; d_ = d;
    context.moveTo(a_, b_);
    context.lineTo(c_, d_);
    //reassign values and draw the 4rth line
    a_ = w-a; b_ = h-b;
    c_ = w-c; d_ = h-d;
    context.moveTo(a_,b_);
    context.lineTo(c_,d_);
    //reassign values and draw the 5th line
    a_ = w/2 + h/2 - b; b_ = w/2 + h/2 - a;
    c_ = w/2 + h/2 - d; d_ = w/2 + h/2 - c;
    context.moveTo(a_,b_);
    context.lineTo(c_,d_);
    //reassign values and draw the 6th line
    a_ = w/2 + h/2 - b; b_ = h/2 - w/2 + a;
    c_ = w/2 + h/2 - d; d_ = h/2 - w/2 + c;
    context.moveTo(a_,b_);
    context.lineTo(c_,d_);
    //reassing values and draw the 7th line
    a_ = w/2 - h/2 + b; b_ = w/2 + h/2 - a;
    c_ = w/2 - h/2 + d; d_ = w/2 + h/2 - c;
    context.moveTo(a_,b_);
    context.lineTo(c_,d_);
    //reassign  values and draw the 8th line
    a_ = w/2 - h/2 + b; b_ = h/2 - w/2 + a;
    c_ = w/2 - h/2 + d; d_ = h/2 - w/2 + c;
    context.moveTo(a_,b_);
    context.lineTo(c_,d_);
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
    if (draw) {
        recordPointerLocation(e);
        drawLine();
    }
}

//runs when the pointer is down (finger is on touchscreen or mouse is clicked)
function handlePointerDown(e) {
    recordPointerLocation(e);
    draw = true;
}

//Part two - CLEAR button and color pallette
function getColor() {
    return document.querySelector(".color").value;
} 

//The first two arguments (0,0) mark the origin, which is actually the top left corner of the canvas. The other two (w,h) mark the full width and height of the canvas. This means the entire canvas will be erased, from the top left corner to the bottom right corner.
function clearCanvas() {
    if (confirm("Want to clear?")) {
        context.clearRect(0, 0, w, h);
    }
}

  


