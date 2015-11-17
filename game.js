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
var playerBat = {
  speed: 200, x:0, y:50
};

var computerBat = {
  speed: 200, x:585, y:50
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
  playerBat.y = (canvas.height / 2) - 45;
  computerBat.y = (canvas.height / 2) - 45;
  ball.y = Math.random() * (canvas.height - 50)
  ball.x = canvas.width / 2;
};

// Update game objects

var update = function (modifier) {
  if (81 in keysDown) { // Player presses q key to move paddle up 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerBat.y -= playerBat.speed * modifier;
  }
  
  if (65 in keysDown) { // Player presses a key to move paddle down 
    ctx.clearRect(0, 0, canvas.width, canvas.height);    
    playerBat.y += playerBat.speed * modifier;
  }
  
  // TODO add collision here
   if (ball.x == ) {
     ball.x = -(speed) }
  
  // TODO Also add paddle collision with top and bottom walls
  
  // TODO add scoring conditions
  // if (ball passes player paddle) {
  //    computerScore++;
  //    reset(); }
  
  // if (ball passes computer paddle) {
  //    playerScore++;
  //    reset(); }
  
  if (playerScore == 10 || computerScore == 10) {
    endGame();
  }
  
};

// Rendering objects
var render = function() {
  if (batReady) {
    ctx.drawImage(batImage, playerBat.x, playerBat.y);
    ctx.drawImage(batImage, computerBat.x, computerBat.y);
  }
  
  if (ballReady) {
    ctx.drawImage(ballImage, ball.x, ball.y);
  }
  
  // Score tracker
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Player: " + playerScore + " " + "Computer: " + computerScore, 300, 5)
};

// main controller which gives us control over the frame rate
var main = function () {
  var now = Date.now();
  var change = now - then;
  
  update(change / 1000);
  render();
  
  then = now;
  
  requestAnimationFrame(main);
};

var endGame = function () {
  // TODO add text saying who won
  // TODO eventually add a play again function and run the reset function
};

// Calls the functions that run the game
var then = Date.now();
reset();
main();










