const key_divs = document.querySelectorAll('.key')
const audioEls = document.querySelectorAll('audio')


function addPlaying(code) {
    key_divs.forEach(div => {
        if (+div.getAttribute('data-key') === code) {
            div.classList.add('playing')
        }
    })
}

function removePlaying() {
    key_divs.forEach(div => div.classList.remove('playing'))
}

function playSound(code) {
    audioEls.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
        if (+audio.getAttribute('data-key') === code) {
            audio.play()
        }
    })
}
window.addEventListener('keydown', (e) => {
    addPlaying(e.keyCode);
    playSound(e.keyCode);
    setTimeout(removePlaying, 100);
});