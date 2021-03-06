var application = {
	functionString: '',
	funcStart: 0,
	funcEnd: 0,
	funcStep: 0.1,
	grapScale: 1,
	axis: {
		x: 0,
		y: 0,
		axisStep: 0.1
	}
};

var loadCanvas = function () {
	"use strict";
	
	var canvas = new HiCanvas(800, 300);
	canvas.addToObj('canvasWrapper');
};

var clearCanvasLayer = function (canvas, layerNumber) {
	"use strict";
	canvas.eraseRectangle(0, 0, canvas.getWidth(), canvas.getHeight(), layerNumber);
};

var calculateScale = function (maxWidth, maxHeight, funcStart, funcEnd) {
	"use strict";
	/*
		Scale calculating logic goes here...
	*/
};

var cleanFunction = function (functionString) {
	"use strict";
	/*
		Function cleaning logic goes here...
	*/
};

var parseFunction = function (functionString) {
	"use strict";
	/*
		Function parsing logic goes here...
	*/
};

var drawAxis = function () {
	"use strict";
	/*
		Axis drawing logic goes here...
	*/
};

var drawFunction = function (canvas) {
	"use strict";
	/*
		Function drawing logic goes here...
	*/
};