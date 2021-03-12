function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);
    const secondsDeg = ((seconds / 60) * 360) + 90;
    $('.second-hand').css('transform', `rotate(${secondsDeg}deg)`)
}


setInterval(setDate, 1000)