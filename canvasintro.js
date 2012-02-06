"use strict";

var draw = startCanvas("maincanvas");

draw.circle(400, 225, 75, "lime");
// x placering, y placering, radie, färg


//lime, fuchsia, navajowhite, #FFDEAD, maroon, silver

for (var i = 0; i < 100; i += 1) {

draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor());
}


draw.clearScreen();

function drawRandomCircleTimeout() {

draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor());
	if ( drawRandomCircleTimeout.count < 100 ) {
	    drawRandomCircleTimeout.count += 1;
	    window.setTimeout(drawRandomCircleTimeout, 10);
	}
}

drawRandomCircleTimeout.count = 0;
//drawRandomCircleTimeout();

function drawRandomCircle() {
	draw.circle(draw.randomX(), draw.randomY(), draw.randomInteger(100), draw.randomColor());
}
//draw.canvas().onclick = drawRandomCircle;

function drawPositionedCircle(evt) {
	draw.circle(evt.pageX - draw.canvasX(), evt.pageY - draw.canvasY(), 10 + draw.randomInteger(50), draw.randomColor(), true);
}

draw.canvas().onclick = drawPositionedCircle;
