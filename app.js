const pjtSection = document.querySelector('#project50')
const addPrjts = document.querySelector('#add-Prjts')
const fp = []; const ap = [];

// ________________________________________________________PROJECTS DATA

fp.push(['Jan 9, 2021','FAQ_collapse','FAQ Collapse']);
fp.push(['Jan 8, 2021','event_key_codes','Event Key Codes']);
fp.push(['Jan 7, 2021','dad_jokes','Dad Jokes']);
fp.push(['Jan 6, 2021','sound_board','Sound Board']);
fp.push(['Jan 5, 2021','form_wave_animation','Form Wave Animation']);
fp.push(['Jan 4, 2021','split_landing_page','Split Landing Page']);
fp.push(['Jan 3, 2021','scroll_animation','Scroll Animation']);
fp.push(['Jan 2, 2021','blurry_loading','Blurry Loading']);
fp.push(['Jan 1, 2021','hidden_search_widget','Hidden Search Widget']);
fp.push(['Dec 31, 2020','rotating_navigation','Rotating Navigation']);
fp.push(['Dec 30, 2020','progress_bar','Progress Bar']);
fp.push(['Dec 29, 2020','expanding_cards','Expanding Cards']);

ap.push(['Jan 2, 2021','hotel_website','Hotel Website'])

// ________________________________________________________50 prjts loop
fp.forEach((prjt,idx)=>{
    let el = document.createElement('div')
    el.classList.add('box')
    el.innerHTML = `<h4>${prjt[0]}</h4>
    <h4><a href="${prjt[1]}/index.html">
    ${fp.length-idx}. ${prjt[2]}</a></h4>`
    pjtSection.appendChild(el)
})

// ________________________________________________________add prjts loop
ap.forEach((prjt,idx)=>{
    let el = document.createElement('div')
    el.classList.add('box')
    el.innerHTML = `<h4>${prjt[0]}</h4>
    <h4><a href="${prjt[1]}/index.html">
    ${prjt[2]}</a></h4>`
    addPrjts.appendChild(el)
})




