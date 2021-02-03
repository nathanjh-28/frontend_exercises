const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    if(idx > img.length - 1){
        idx = 0
    } else if(idx < 0) {
        idx = img.length -1
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click',()=>{
    idx++
    changeImage()
    resetInterval()
})
leftBtn.addEventListener('click',()=>{
    idx--
    changeImage()
    resetInterval()
})

// ___ My solution
// const prev = document.getElementById('left')
// const next = document.getElementById('right')
// const imgContainer = document.querySelector('.image-container')

// let transValue = 0

// next.addEventListener('click',()=>{
//     removeTransVal()
// })
// prev.addEventListener('click',()=>{
//     addTransVal()
// })

// function removeTransVal() {
//     if (transValue === -300){
//         transValue = 0
//         imgContainer.style.transform = `translateX(${transValue}%)`
//     } else {
//         transValue -= 100
//         imgContainer.style.transform = `translateX(${transValue}%)`
//     }
// }
// function addTransVal() {
//     if (transValue === 0){
//         transValue = -300
//         imgContainer.style.transform = `translateX(${transValue}%)`
//     } else {
//         transValue += 100
//         imgContainer.style.transform = `translateX(${transValue}%)`
//     }
// }