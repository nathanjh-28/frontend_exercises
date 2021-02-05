// Parent Divs
const pjtSection = document.querySelector('#project50')
const addPrjts = document.querySelector('#add-Prjts')

// Getting Data

const getData = async () =>{
    const res = await fetch('data.json')
    const data = await res.json()
    return data
} 

// Populate DOM
const data = getData()
.then((data)=>{
    fiftyProjects(data.fp)
    additionalProjects(data.ap)
})

//  Loop through and Make Cards
function fiftyProjects(data){
    data.forEach((prjt, idx) => {
        let el = document.createElement('div')
        el.classList.add('box')
        el.innerHTML = `<h4>${prjt[0]}</h4>
        <h4><a href="fp/${prjt[1]}/index.html">
        ${data.length - idx}. ${prjt[2]}</a></h4>`
        pjtSection.appendChild(el)
    })
}
function additionalProjects(data){
    data.forEach((prjt, idx) => {
        let el = document.createElement('div')
        el.classList.add('box')
        el.innerHTML = `<h4>${prjt[0]}</h4>
        <h4><a href="ap/${prjt[1]}/index.html">
        ${prjt[2]}</a></h4>`
        addPrjts.appendChild(el)
    })
}



