
//App State
const secondHand = $('.second-hand')
const minHand = $('.min-hand');
const hourHand = $('.hour-hand');

// Clock Function
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.css('transform', `rotate(${secondsDeg}deg)`)

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    minHand.css('transform', `rotate(${minsDeg}deg)`);

    let hours = now.getHours();
    if (hours > 12) hours -= 12
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourHand.css('transform', `rotate(${hoursDeg}deg)`)

}

// Start Clock
setInterval(setDate, 1000)