const squares = document.querySelectorAll('.grid div');
const result = document.getElementById('result');
const displayCurrentPlayer = document.getElementById('current-player')
let currentPlayer = 1;

loadGame()

function loadGame() {
    squares.forEach((square, index) => {
        square.onclick = function () {
            if (squares[index + 7].classList.contains('taken')) {
                if (currentPlayer === 1) {
                    square.classList.add('taken');
                    square.classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                }
                else if (currentPlayer === 2) {
                    square.classList.add('taken');
                    square.classList.add('player-two');
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else {
                    alert('cannot go here');
                }
            }
            // checkBoard()
        }
    })
}
