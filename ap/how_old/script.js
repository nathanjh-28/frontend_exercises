const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const todayDateEl = document.getElementById('todayDate')
const daysEl = document.getElementById('days')

let time = 0
let date = 0

let str = 'yyyy-mm-dd'
var parts = str.split("-");
var dt = new Date(parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10));

console.log(dt)

timeEl.addEventListener('input', (e) => {
    console.log(e.target.value)
})
dateEl.addEventListener('input', (e) => {
    console.log(e.target.value)
})