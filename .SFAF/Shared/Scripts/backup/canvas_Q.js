var context;
var started;
var canvases = {};
var line = "";
var drawStyle = 'p';
var eraseSize = 20;
var eraseHalfSize = 10;
var lineColor = "";
var lineSize = "4";
var lineAlpha = 1.0;

function setPencilLine(c,s,o) {
	//c = color, s = size, o = opacity/alpha
	drawStyle = 'p';
	lineColor = c;
	lineSize = s;
	lineAlpha = o;
	var cs = document.getElementById('canvas1');
	context = document.getElementById('canvas1').getContext('2d');
	if(lineColor == null)
	{
		lineColor = "#000000";	
	}
	context.strokeStyle = lineColor; //SET TOOL COLOR
	if(lineSize == null)
	{
		lineSize = "4";	
	}
	if(lineAlpha == null)
	{
		lineAlpha = 1.0;	
	}
	context.globalAlpha = lineAlpha; //SET TOOL OPACITY
	context.lineWidth = lineSize; //SET TOOL SIZE
	cs.style.cursor = "default";
	context.lineCap = "round";
}

function setEraserLine() {
	drawStyle = 'e';
	var cs = document.getElementById('canvas1');
	cs.style.cursor = "crosshair";
}

function ev_canvas(ev) {
	var x, y;
	if (ev.layerX || ev.layerX == 0) { // Firefox
		x = ev.layerX;
		y = ev.layerY;
	} else if (ev.offsetX || ev.offsetX == 0) { // Opera
		x = ev.offsetX;
		y = ev.offsetY;
	}

	if (drawStyle == "e") {
		//ERASER
		if (ev.type == 'mousedown') {
			context = this.getContext('2d');
			started = true;
			context.clearRect(x-eraseHalfSize,y-eraseHalfSize,eraseSize,eraseSize);
			//line += "/_" + x.toString() + ',' + y.toString() + "," + drawStyle;
			line += "/_" + x.toString() + ',' + y.toString() + "," + drawStyle + "," + lineColor + "," + lineSize + "," + lineAlpha;
		}
		else if (ev.type == "mousemove") {
			if (started) {
				context.clearRect(x-eraseHalfSize,y-eraseHalfSize,eraseSize,eraseSize);
				//line += "_" + x.toString() + "," + y.toString() + "," + drawStyle;
				line += "_" + x.toString() + ',' + y.toString() + "," + drawStyle + "," + lineColor + "," + lineSize + "," + lineAlpha;
			}
		}
		else if (ev.type == 'mouseup') {
			started = false;
		}
	}
	else {
		//PENCIL
		if (ev.type == 'mousedown') {
			context = this.getContext('2d');
			context.beginPath();
			context.moveTo(x, y);
			started = true;
			console.log(line);
			//line += "/_" + x.toString() + ',' + y.toString() + "," + drawStyle;
			line += "/_" + x.toString() + ',' + y.toString() + "," + drawStyle + "," + lineColor + "," + lineSize + "," + lineAlpha;
		}
		else if (ev.type == "mousemove") {
			if (started) {
				context.lineTo(x, y);
				context.stroke();
				//line += "_" + x.toString() + "," + y.toString() + "," + drawStyle;
				line += "_" + x.toString() + ',' + y.toString() + "," + drawStyle + "," + lineColor + "," + lineSize + "," + lineAlpha;
			}
		}
		else if (ev.type == 'mouseup') {
			started = false;
			context.closePath();
		}
	}
	ev.preventDefault();
	return false;
}

function initCanvasForDrawing(cName) {
	var canvas = document.getElementById(cName);
	// Attach the mousedown, mousemove and mouseup event listeners.
	canvas.addEventListener('mousedown', ev_canvas, false);
	canvas.addEventListener('mousemove', ev_canvas, false);
	canvas.addEventListener('mouseup', ev_canvas, false);
	setPencilLine();
	resetCanvas(canvas);
}

function resetCanvas(canvas) {
	canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
	line = '';
}

function hasLocalStorage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

function getLastDrawing(id) {
	setPencilLine();
	if (hasLocalStorage()) {
		var l = localStorage.getItem(id);
		if (l != null) {
			var cs = document.getElementById('canvas1');
			context = cs.getContext('2d');
			resetCanvas(cs);
			var l2 = l.split('$');
			drawTheLine(l2[1]);
		}
	}
	toggleElementInline('getDialog');
}


function drawTheLine(l) {
	var cs = document.getElementById('canvas1');
	context = cs.getContext('2d');
	line = l;
	var ls = l.split('/');
	for (i = 0; i < ls.length; i++) {
		if (ls[i] != null && ls[i] != '') {
			var lo = ls[i].split('_');
			var draw = true;
			for (x = 0; x < lo.length; x++) {
				var c = lo[x].split(',');
				
				if (x == 0) {
					context.beginPath();										
					context.moveTo(c[0], c[1]);
				}
				else {
					draw=true;
					if (c.length > 2) {
						if (c[2] == "e") {
							context.clearRect(parseInt(c[0])-eraseHalfSize,parseInt(c[1])-eraseHalfSize,eraseSize,eraseSize);
							draw=false;
						}
						else if (c[2] == "p") {
							context.strokeStyle = c[3];//"black";
							context.lineWidth = c[4];//4;
							context.globalAlpha = c[5];
						}
					}
					else {
						context.strokeStyle = "black";
						context.lineWidth = 4;
						context.globalAlpha = 1.0;
					}
					if (draw) {
						context.lineTo(c[0], c[1]);
						context.stroke();										
					}
				}
			}
		}
	}
	context.closePath();
	setPencilLine(parent.globalLineColor,parent.globalLineSize,parent.globalLineAlpha);
}

function drawTheLine2(l) {
	//BACKUP OF DRAW THE LINE
	var cs = document.getElementById('canvas1');
	context = cs.getContext('2d');
	line = l;
	var ls = l.split('/');
	for (i = 0; i < ls.length; i++) {
		if (ls[i] != null && ls[i] != '') {
			var lo = ls[i].split('_');
			var draw = true;
			for (x = 0; x < lo.length; x++) {
				var c = lo[x].split(',');
				
				if (x == 0) {
					context.beginPath();										
					context.moveTo(c[0], c[1]);
				}
				else {
					draw=true;
					if (c.length > 2) {
						if (c[2] == "e") {
							context.clearRect(parseInt(c[0])-eraseHalfSize,parseInt(c[1])-eraseHalfSize,eraseSize,eraseSize);
							draw=false;
						}
						else if (c[2] == "p") {
							context.strokeStyle = "black";
							context.lineWidth = 4;
						}
					}
					else {
						context.strokeStyle = "black";
						context.lineWidth = 4;
					}
					if (draw) {
						context.lineTo(c[0], c[1]);
						context.stroke();										
					}
				}
			}
		}
	}
	context.closePath();
	setPencilLine();
}

function saveDrawing(id) {
	if (hasLocalStorage()) {	
		var d = new Date();
		var a = d.getTime();	
		localStorage.setItem(id, a.toString() + "$" + line);
	}
}

function changePenColor(c) {
	document.getElementById('canvas1').getContext('2d').strokeStyle = c;
}

try {
	context = document.getElementById('canvas1').getContext('2d');
} catch(exc) {
}
// setup the load event, if it is supported
if (window.addEventListener) {
	window.addEventListener('load', function () {
		eraseSize = 20;
		eraseHalfSize = 10;
		var c = document.getElementsByName("drawableCanvas");
		for (i = 0; i < c.length; i++) { initCanvasForDrawing(c[i].id); }
	}, false);
}