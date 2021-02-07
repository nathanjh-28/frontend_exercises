const password = document.getElementById('password')
const background = document.getElementById('background')


// My Solution
// let blurVal = 20
// password.addEventListener('keydown', (e)=>{
//     eHandle(e)
// })

// function eHandle (e){
//     if(e.key === 'Backspace')blurVal++
//     else {blurVal = blurVal - password.value.length+1}
//     background.style.filter = `blur(${blurVal}px)`
// }

password.addEventListener('input',(e)=>{
    const input = e.target.value 
    length = input.length
    const blurValue = 20-length * 2
    background.style.filter = `blur(${blurValue}px)`

    console.log(20-length * 2)
})