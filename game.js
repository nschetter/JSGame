// creates the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

// bat image
var batReady = false;
var batImage = new Image();
batImage.onload = function () {
  batReady = true;
};
batImage.src = "assets/bat.png"

// ball image
var ballReady = false;
var ballImage = new Image();
ballImage.onload = function () {
  ballReady = true;
};
ballImage.src = "assets/ball.png"

// objects of the game
// speed in pixels per second
// TODO fix paddle positions 
var playerPaddle = {
  speed: 200, x:0, y:240
};

var computerPaddle = {
  speed: 200, x:0, y:240
};

var ball = {
  speed: 200, x:0, y:0
};

var playerScore = 0;
var computerScore = 0;

// keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// reset the field when player or computer scores
var reset = function () {
  playerPaddle.y = canvas.height / 2;
  computerPaddle.y = canvas.height / 2;
  ball.y = (Math.random() * (canvas.height - 50);
  ball.x = canvas.width / 2;
};

// Update game objects

var update = function (modifier) {
  if (81 in keysDown) { // Player presses q key to move paddle up 
    playerPaddle.y -= playerPaddle.speed * modifier;
  }
  
  if (65 in keysDown) { // Player presses a key to move paddle down 
    playerPaddle.y += playerPaddle.speed * modifier;
  }
  
  // TODO add collision here
  // if (ball collides with bat) {
  //    ball.x = -(speed) }
  
  // TODO add scoring conditions
  // if (ball passes player paddle) {
  //    computerScore++;
  //    reset(); }
  
  // if (ball passes computer paddle) {
  //    playerScore++;
  //    reset(); }
}














