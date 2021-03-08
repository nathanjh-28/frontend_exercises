
const squares = document.querySelectorAll('.grid div');
const scoreDisplay = document.querySelector('span');
const startBtn = document.querySelector('.start');

const width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

//start game

function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(interval);
    score = 0;
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    interval = setInterval(moveOutcomes, intervalTime);
}

startBtn.addEventListener('click', startGame)

function control(e) {
    squares[currentIndex].classList.remove('snake');
    // console.log(e)
    if (e.code === "ArrowRight") {
        direction = 1; // right arrow
        console.log('move right')
    } else if (e.code === "ArrowUp") {
        direction = -width; // up arrow
        console.log('move up')
    } else if (e.code === "ArrowLeft") {
        direction = -1; // left arrow
        console.log('move left')
    } else if (e.code === "ArrowDown") {
        direction = +width; // down arrow
        console.log('move down')
    }
}
document.addEventListener('keyup', (e) => {
    control(e)
});