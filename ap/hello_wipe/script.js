const text = document.querySelector('.window h1')



function showText() {
    text.style.opacity = 1
    text.style.transform = 'translateY(3%)'
}

setTimeout(showText, 1000)