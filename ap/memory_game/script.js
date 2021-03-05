
const cardArray = [
    {
        name: 'bee',
        img: 'img/bee.jpg'
    },
    {
        name: 'koala',
        img: 'img/koala.jpg'
    },
    {
        name: 'tiger',
        img: 'img/tiger.jpg'
    },
    {
        name: 'toucan',
        img: 'img/toucan.jpg'
    },
    {
        name: 'turtle',
        img: 'img/turtle.jpg'
    },
    {
        name: 'zebra',
        img: 'img/zebra.jpg'
    },
    {
        name: 'bee',
        img: 'img/bee.jpg'
    },
    {
        name: 'koala',
        img: 'img/koala.jpg'
    },
    {
        name: 'tiger',
        img: 'img/tiger.jpg'
    },
    {
        name: 'toucan',
        img: 'img/toucan.jpg'
    },
    {
        name: 'turtle',
        img: 'img/turtle.jpg'
    },
    {
        name: 'zebra',
        img: 'img/zebra.jpg'
    },
];

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.getElementById('result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/card.jpg')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match');
        cards[optionOneId].setAttribute('src', 'img/white.png');
        cards[optionTwoId].setAttribute('src', 'img/white.png');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'img/card.jpg');
        cards[optionTwoId].setAttribute('src', 'img/card.jpg');
        alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations!  You found them all!'
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }

}



createBoard()