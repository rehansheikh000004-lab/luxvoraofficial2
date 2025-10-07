@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at top left, #1e1e2f, #2c1b47, #0f0c29);
  color: #fff;
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

canvas {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

/* 📱 Mobile Controls */
.mobile-controls {
  display: none;
  margin-top: 20px;
  gap: 25px;
}

.mobile-controls button {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  color: white;
  font-size: 1.6rem;
  box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
}

.mobile-controls button:active {
  transform: scale(0.9);
}

@media (max-width: 768px) {
  canvas {
    width: 90vw;
    height: 55vh;
  }

  .mobile-controls {
    display: flex;
  }
}
