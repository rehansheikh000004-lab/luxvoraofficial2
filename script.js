const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

const grid = 20; // size of each snake segment
const canvasSize = 400;
let snake = [{x:10, y:10}];
let direction = {x:1, y:0}; // starts moving right
let food = {x:5, y:5};
let score = 0;
let speed = 200; // ms per move

// Draw game
function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0,0,canvasSize,canvasSize);

  // Draw food
  ctx.fillStyle = "#ff8a00";
  ctx.beginPath();
  ctx.arc(food.x*grid + grid/2, food.y*grid + grid/2, grid/2, 0, Math.PI*2);
  ctx.fill();

  // Draw snake
  snake.forEach((segment, index) => {
    let gradient = ctx.createLinearGradient(0,0,canvasSize,canvasSize);
    gradient.addColorStop(0, "#ff8a00");
    gradient.addColorStop(1, "#e52e71");
    ctx.fillStyle = gradient;
    ctx.fillRect(segment.x*grid, segment.y*grid, grid, grid);
  });
}

// Update game
function update() {
  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

  // Collision
  if(head.x<0 || head.x>=canvasSize/grid || head.y<0 || head.y>=canvasSize/grid || snake.some(s=>s.x===head.x && s.y===head.y)){
    alert(`Game Over! Score: ${score}`);
    snake = [{x:10, y:10}];
    direction = {x:1, y:0};
    score = 0;
    food = {x: Math.floor(Math.random()*canvasSize/grid), y: Math.floor(Math.random()*canvasSize/grid)};
    scoreDisplay.textContent = score;
    return;
  }

  snake.unshift(head);

  // Eat food
  if(head.x===food.x && head.y===food.y){
    score++;
    scoreDisplay.textContent = score;
    food = {x: Math.floor(Math.random()*canvasSize/grid), y: Math.floor(Math.random()*canvasSize/grid)};
  } else {
    snake.pop();
  }

  draw();
}

// Arrow key controls
document.addEventListener("keydown", e => {
  switch(e.key){
    case "ArrowUp": if(direction.y!==1) direction={x:0,y:-1}; break;
    case "ArrowDown": if(direction.y!==-1) direction={x:0,y:1}; break;
    case "ArrowLeft": if(direction.x!==1) direction={x:-1,y:0}; break;
    case "ArrowRight": if(direction.x!==-1) direction={x:1,y:0}; break;
  }
});

// Mobile swipe controls
let touchStartX=0, touchStartY=0;
canvas.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});
canvas.addEventListener("touchend", e => {
  let touchEndX = e.changedTouches[0].clientX;
  let touchEndY = e.changedTouches[0].clientY;
  let dx = touchEndX - touchStartX;
  let dy = touchEndY - touchStartY;

  if(Math.abs(dx) > Math.abs(dy)){
    if(dx>0 && direction.x!==-1) direction={x:1,y:0};
    else if(dx<0 && direction.x!==1) direction={x:-1,y:0};
  } else {
    if(dy>0 && direction.y!==-1) direction={x:0,y:1};
    else if(dy<0 && direction.y!==1) direction={x:0,y:-1};
  }
});

// Game loop
setInterval(update, speed);
draw();
    localStorage.setItem("theme", "light");
  }
});
