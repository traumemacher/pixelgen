//Settings//
var canvas;
var context;
var speed = 1; //ms
var rows = 350;
var pixelSize = 2; //px
var seed = new Date().getTime().toString().slice(-6) + "1111";
////

document.addEventListener("DOMContentLoaded", function() {
		function toggle() {
				var revolutions = setInterval(function() {
						//createCanvas();
					  setColor();
				}, speed);
				document.querySelector("#stop").addEventListener("click", function() {
						clearInterval(revolutions);
				}, false);
		}
	
	//var rows = Math.round(window.innerHeight / 24);	  
		if (document.querySelector("canvas")) {
				canvas = document.querySelector("canvas");
		} else {
				canvas = document.createElement("canvas");
				document.body.appendChild(canvas);
		}

		context = canvas.getContext("2d");
		canvas.style.marginLeft = -(rows * pixelSize / 2) + "px";
		canvas.style.marginTop = -(rows * pixelSize) / 2 + "px";
		canvas.width = rows * pixelSize;
		canvas.height = rows * pixelSize;

		toggle();
		document.querySelector("#start").addEventListener("click", toggle);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor() {		
		var x = getRandomInt(rows)*pixelSize;
		var y = getRandomInt(rows)*pixelSize;

		var newColors = [];
		for (var j = 0; j < seed.length; j++) {
			var num = parseInt(seed.charAt(j));
			newColors.push(colors[num]);
		}

	  //context.save();
		//context.clearRect(x, y, canvas.width, canvas.height);
		context.fillStyle = getRandomColor();
		context.fillRect(x, y, pixelSize, pixelSize);
	  //context.restore();
}
