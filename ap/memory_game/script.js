
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

const grid = document.querySelector('.grid');
const cardsChosen = []
const cardsChosenId = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/card.jpg')
        card.setAttribute('data-id', i);
        grid.appendChild(card)
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
}



createBoard()