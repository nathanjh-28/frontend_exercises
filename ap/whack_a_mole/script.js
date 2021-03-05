const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = timeLeft.textContent

function randomSquare() {
    squares.forEach(className => {
        className.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);

}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER Your final score is ' + result)
    }
}

moveMole()

let timerId = setInterval(countDown, 1000)