function moveSnake(){
  // Do nothing if snake hasn't started moving
  if(direction.x === 0 && direction.y === 0) return;

  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

  // Game over conditions
  if(head.x<0 || head.x>=boardSize || head.y<0 || head.y>=boardSize || snake.some(s=>s.x===head.x && s.y===head.y)){
    alert(`Game Over! Score: ${score}`);
    snake = [{x:10, y:10}];
    direction = {x:0, y:0};
    score = 0;
    food = {x: Math.floor(Math.random()*boardSize), y: Math.floor(Math.random()*boardSize)};
    scoreDisplay.textContent = score;
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
