// creates the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// objects of the game
// speed in pixels per second
// TODO fix 
var playerPaddle = {
  speed: 200, x:0, y:0
};

var computerPaddle = {
  speed: 200, x:0, y:0
};

var ball = {
  speed: 200, x:0, y:0
};

// keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

