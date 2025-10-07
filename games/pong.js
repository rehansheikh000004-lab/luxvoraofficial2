const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

let paddleWidth = 100;
let paddleHeight = 12;
let ballRadius = 8;

let playerX = (canvas.width - paddleWidth) / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let dx = 4;
let dy = -4;
let rightPressed = false;
let leftPressed = false;
let score = 0;

// 🎮 Keyboard Controls
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
  else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
  else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
}

// 📱 Mobile Buttons
document.getElementById("leftBtn").addEventListener("touchstart", () => (leftPressed = true));
document.getElementById("leftBtn").addEventListener("touchend", () => (leftPressed = false));
document.getElementById("rightBtn").addEventListener("touchstart", () => (rightPressed = true));
document.getElementById("rightBtn").addEventListener("touchend", () => (rightPressed = false));

// 🎨 Draw Ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ff6ec4";
  ctx.fill();
  ctx.closePath();
}

// 🟪 Draw Paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(playerX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
  ctx.fillStyle = "#48c6ef";
  ctx.fill();
  ctx.closePath();
}

// 🧮 Draw Score
function drawScore() {
  ctx.font = "16px Poppins";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10, 20);
}

// 🕹️ Game Loop
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();

  if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) dx = -dx;
  if (ballY + dy < ballRadius) dy = -dy;
  else if (ballY + dy > canvas.height - ballRadius - paddleHeight - 10) {
    if (ballX > playerX && ballX < playerX + paddleWidth) {
      dy = -dy;
      score++;
    } else if (ballY + dy > canvas.height - ballRadius) {
      alert("Game Over! Final Score: " + score);
      document.location.reload();
    }
  }

  ballX += dx;
  ballY += dy;

  if (rightPressed && playerX < canvas.width - paddleWidth) playerX += 7;
  else if (leftPressed && playerX > 0) playerX -= 7;

  requestAnimationFrame(draw);
}

draw();
