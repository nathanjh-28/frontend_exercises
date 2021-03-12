
//App State
const secondHand = $('.second-hand')
const minHand = $('.min-hand');
const hourHand = $('.hour-hand');

// Clock Function
function setDate() {
    const now = new Date();

    //_________________ SECONDS

    const seconds = now.getSeconds()
    const secondsDeg = ((seconds / 60) * 360) + 90;

    // if at the end, change transition to prevent the hand from rewinding to the beginning.

    if (secondsDeg === 444) {
        secondHand.css('transition', 'none')
        secondHand.css('transform', `rotate(${secondsDeg}deg)`)
    } else {
        secondHand.css('transition', 'all 0.05s')
        secondHand.css('transform', `rotate(${secondsDeg}deg)`)
    }

    //_________________ MINUTES

    const mins = now.getMinutes()
    const minsDeg = ((mins / 60) * 360) + 90;
    if (minsDeg === 444) {
        minHand.css('transition', 'none')
        minHand.css('transform', `rotate(${minsDeg}deg)`)
    } else {
        minHand.css('transition', 'all 0.05s')
        minHand.css('transform', `rotate(${minsDeg}deg)`)
    }

    //_________________ HOURS    

    let hours = now.getHours()
    if (hours > 12) {
        hours -= 12;
    }
    const hoursDeg = ((hours / 12) * 360) + 90

    if (hoursDeg === 420) {
        hourHand.css('transition', 'none')
        hourHand.css('transform', `rotate(${hoursDeg}deg)`)
    } else {
        hourHand.css('transition', 'all 0.05s')
        hourHand.css('transform', `rotate(${hoursDeg}deg)`)
    }


}


// Start Clock
setInterval(setDate, 1000)