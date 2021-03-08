
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

function control(e) {
    squares[currentIndex].classList.remove('snake');
    if (e.keycode === 39) {
        direction = 1; // right arrow
        console.log('move right')
    } else if (e.keycode === 38) {
        direction = -width; // up arrow
        console.log('move up')
    } else if (e.keycode === 37) {
        direction = -1; // left arrow
        console.log('move left')
    } else if (e.keycode === 40) {
        direction = +width; // down arrow
        console.log('move down')
    }
}
document.addEventListener('keyup', (e) => {
    squares[currentIndex].classList.remove('snake');
    if (e.keyCode === 39) {
        direction = 1; // right arrow
        console.log('move right')
    } else if (e.keyCode === 38) {
        direction = -width; // up arrow
        console.log('move up')
    } else if (e.keyCode === 37) {
        direction = -1; // left arrow
        console.log('move left')
    } else if (e.keyCode === 40) {
        direction = +width; // down arrow
        console.log('move down')
    }
})