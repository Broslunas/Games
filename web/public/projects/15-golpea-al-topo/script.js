let score = 0;
let activeHole = null;
let gameInterval = null;

function startGame() {
    score = 0;
    document.getElementById('score').textContent = `Puntaje: ${score}`;
    document.getElementById('startButton').disabled = true;

    gameInterval = setInterval(() => {
        if (activeHole) {
            activeHole.classList.remove('active');
        }
        const randomHole = document.getElementById(`hole${Math.floor(Math.random() * 6) + 1}`);
        randomHole.classList.add('active');
        activeHole = randomHole;
    }, 1000);

    setTimeout(() => {
        clearInterval(gameInterval);
        alert(`Juego terminado! Tu puntaje es: ${score}`);
        document.getElementById('startButton').disabled = false;
    }, 30000);
}

function hitMole(event) {
    if (event.target.classList.contains('active')) {
        score++;
        document.getElementById('score').textContent = `Puntaje: ${score}`;
        event.target.classList.remove('active');
        activeHole = null; // Ensure the mole is deactivated
    }
}

document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('click', hitMole);
});

document.getElementById('startButton').addEventListener('click', startGame);