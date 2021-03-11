const key_divs = document.querySelectorAll('.key')

window.addEventListener('keydown', (e) => {
    addPlaying(e.keyCode);
    //playSound(e.keyCode);
    setTimeout(removePlaying, 100);
});

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