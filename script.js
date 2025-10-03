const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

const boardSize = 20;
let snake = [{x:10, y:10}];
let direction = {x:0, y:0};
let food = {x:5, y:5};
let score = 0;
let speed = 200;

function createBoard() {
  board.innerHTML = "";
  for(let y=0; y<boardSize; y++){
    for(let x=0; x<boardSize; x++){
      const cell = document.createElement("div");
      cell.dataset.x = x;
      cell.dataset.y = y;
      // Draw food
      if(x===food.x && y===food.y) cell.classList.add("food");
      // Draw snake
      snake.forEach(seg => {
        if(seg.x===x && seg.y===y) cell.classList.add("snake");
      });
      board.appendChild(cell);
    }
  }
}

// Move snake every interval
function moveSnake(){
  if(direction.x===0 && direction.y===0) return; // wait until arrow pressed

  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

  // Game Over
  if(head.x<0 || head.x>=boardSize || head.y<0 || head.y>=boardSize || snake.some(s=>s.x===head.x && s.y===head.y)){
    alert(`Game Over! Score: ${score}`);
    snake = [{x:10, y:10}];
    direction = {x:0, y:0};
    score = 0;
    food = {x: Math.floor(Math.random()*boardSize), y: Math.floor(Math.random()*boardSize)};
    scoreDisplay.textContent = score;
    createBoard();
    return;
  }

  snake.unshift(head);

  // Eat food
  if(head.x===food.x && head.y===food.y){
    score++;
    scoreDisplay.textContent = score;
    food = {x: Math.floor(Math.random()*boardSize), y: Math.floor(Math.random()*boardSize)};
  } else {
    snake.pop();
  }

  createBoard();
}

// Arrow keys to move
document.addEventListener("keydown", e => {
  switch(e.key){
    case "ArrowUp": if(direction.y!==1) direction={x:0,y:-1}; break;
    case "ArrowDown": if(direction.y!==-1) direction={x:0,y:1}; break;
    case "ArrowLeft": if(direction.x!==1) direction={x:-1,y:0}; break;
    case "ArrowRight": if(direction.x!==-1) direction={x:1,y:0}; break;
  }
});

setInterval(moveSnake, speed);
createBoard();
