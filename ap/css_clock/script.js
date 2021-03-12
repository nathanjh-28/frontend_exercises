function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    //console.log(seconds);
    const secondsDeg = ((seconds / 60) * 360) + 90;
    $('.second-hand').css('transform', `rotate(${secondsDeg}deg)`)

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    $('.min-hand').css('transform', `rotate(${minsDeg}deg)`);

    let hours = now.getHours();
    if (hours > 12) hours -= 12
    const hoursDeg = ((hours / 12) * 360) + 90;
    $('.hour-hand').css('transform', `rotate(${hoursDeg}deg)`)

}


setInterval(setDate, 1000)