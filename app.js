// Parent Divs
const pjtSection = document.querySelector('#project50')
const addPrjts = document.querySelector('#add-Prjts')

// Getting Data

const getData = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    return data
}

// Populate DOM
const data = getData()
    .then((data) => {
        fiftyProjects(data.fp)
        additionalProjects(data.ap)
    })

//  Loop through and Make Cards
function fiftyProjects(data) {
    data.forEach((prjt, idx) => {
        let el = document.createElement('div')
        el.classList.add('box')
        el.innerHTML = `<h4>${prjt[0]}</h4>
        <h4><a href="fp/${prjt[1]}/index.html">
        ${data.length - idx}. ${prjt[2]}</a></h4>`
        pjtSection.appendChild(el)
    })
}
function additionalProjects(data) {
    data.forEach((prjt, idx) => {
        if (prjt[3]) {
            let el = document.createElement('div')
            el.classList.add('box')
            el.innerHTML = `<h4>${prjt[0]}</h4>
            <h4><a href=${prjt[3]}>
            ${prjt[2]}</a></h4>`
            addPrjts.appendChild(el)
        } else {
            let el = document.createElement('div')
            el.classList.add('box')
            el.innerHTML = `<h4>${prjt[0]}</h4>
            <h4><a href="ap/${prjt[1]}/index.html">
            ${prjt[2]}</a></h4>`
            addPrjts.appendChild(el)
        }

    })
}

// Show Hide Functionality

const closeFifty = document.getElementById('close-fifty')
const openFifty = document.getElementById('open-fifty')

closeFifty.addEventListener('click', () => {
    pjtSection.classList.add('hidden')
    openFifty.classList.remove('hidden')
    closeFifty.classList.add('hidden')
})

openFifty.addEventListener('click', () => {
    pjtSection.classList.remove('hidden')
    closeFifty.classList.remove('hidden')
    openFifty.classList.add('hidden')
})

const closeAddPjts = document.getElementById('close-addPjts')
const openAddPjts = document.getElementById('open-addPjts')

closeAddPjts.addEventListener('click', () => {
    addPrjts.classList.add('hidden')
    openAddPjts.classList.remove('hidden')
    closeAddPjts.classList.add('hidden')
})

openAddPjts.addEventListener('click', () => {
    addPrjts.classList.remove('hidden')
    closeAddPjts.classList.remove('hidden')
    openAddPjts.classList.add('hidden')
})

const closeReact = document.getElementById('close-react')
const openReact = document.getElementById('open-react')
const pjtReact = document.getElementById('project-react')

closeReact.addEventListener('click', () => {
    pjtReact.classList.add('hidden')
    openReact.classList.remove('hidden')
    closeReact.classList.add('hidden')
})

openReact.addEventListener('click', () => {
    pjtReact.classList.remove('hidden')
    closeReact.classList.remove('hidden')
    openReact.classList.add('hidden')
})