const thumb = document.getElementById('thumb')
const bar = document.getElementById('bar')

//https://javascript.info/size-and-scroll-window
//https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

const maxPos = 200

bar.style.height = `${maxPos}px`

console.log(maxPos)

window.addEventListener('scroll', (e) => {
    const marker = window.scrollY
    console.log(scrollHeight, marker)
    const thumbPosition = scale(marker, 0, scrollHeight, 0, maxPos)
    // if (thumbPosition > maxPos) {
    //     thumbPosition = 300
    // }
    thumb.style.top = `${thumbPosition}px`

})

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}