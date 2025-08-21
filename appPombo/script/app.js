const square = document.getElementById("square");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

let score = 0;

// Função para mover o quadrado aleatoriamente
function moveSquare() {
    const maxX = gameArea.clientWidth - square.clientWidth;
    const maxY = gameArea.clientHeight - square.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    square.style.left = randomX + "px";
    square.style.top = randomY + "px";
}

// Quando o quadrado é clicado
square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveSquare();
});

// Mover o quadrado a cada 1,5 segundos
setInterval(moveSquare, 950);
