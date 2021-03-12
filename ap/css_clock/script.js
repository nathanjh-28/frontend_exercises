function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    //console.log(seconds);
    const secondsDeg = ((seconds / 60) * 360) + 90;
    $('.second-hand').css('transform', `rotate(${secondsDeg}deg)`)

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    $('.min-hand').css('transform', `rotate(${minsDeg}deg)`);

}


setInterval(setDate, 1000)