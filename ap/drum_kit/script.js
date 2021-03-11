// const key_divs = document.querySelectorAll('.key')
// const audioEls = document.querySelectorAll('audio')


// function addPlaying(code) {
//     key_divs.forEach(div => {
//         if (+div.getAttribute('data-key') === code) {
//             div.classList.add('playing')
//         }
//     })
// }

// function removePlaying() {
//     key_divs.forEach(div => div.classList.remove('playing'))
// }

// function playSound(code) {
//     audioEls.forEach(audio => {
//         audio.pause()
//         audio.currentTime = 0;
//         if (+audio.getAttribute('data-key') === code) {
//             audio.play()
//         }
//     })
// }
// window.addEventListener('keydown', (e) => {
//     addPlaying(e.keyCode);
//     playSound(e.keyCode);
//     setTimeout(removePlaying, 100);
// });

// Wes Bos Solution with my organization

const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);