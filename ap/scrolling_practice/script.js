const heading = document.querySelector('h1')
const body = document.querySelector('body')
let height = 400
body.style.height = `${height}vh`
let marker = 0

const messageArr = [
    'Hello',
    'My name is',
    'Nathan.',
    'Nice to',
    'meet you.'
]

window.addEventListener('scroll',(e)=>{
    marker = window.scrollY
    if(marker < 500){
        heading.innerText = messageArr[0]
        body.style.backgroundColor = 'blue'
    }
    if(marker > 500 && marker < 1000){
        heading.innerText = messageArr[1]
        body.style.backgroundColor = 'pink'
    }
    if(marker > 1000 && marker < 1500){
        heading.innerText = messageArr[2]
        body.style.backgroundColor = 'purple'
    }
    if(marker > 1500 && marker < 2000){
        heading.innerText = messageArr[3]
        body.style.backgroundColor = 'red'
    }
    if(marker > 2000 && marker < 2500){
        heading.innerText = messageArr[4]
        body.style.backgroundColor = 'green'
    }


})