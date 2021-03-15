const container = document.getElementById('container')
const text = document.getElementById('text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2 // 3s
const holdTime = totalTime / 5; // 1.5s

function breathAnimation() {
    text.innerText = "Breathe In!"
    container.className = 'container grow'
    setTimeout(() => {
        text.innerText = "Hold!"
        setTimeout(() => {
            text.innerText = "Breathe Out!"
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)

}

breathAnimation()
setInterval(breathAnimation, totalTime)

