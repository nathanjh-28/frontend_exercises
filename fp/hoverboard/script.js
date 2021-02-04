const container = document.getElementById('container')
const colors = ['red','green','blue','orange','pink','purple','yellow']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseout', ()=> removeColor(square))

    container.appendChild(square)
}

function setColor (el){
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}
function removeColor (el){
    el.style.background = '#1d1d1d'
    el.style.boxShadow =  '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}