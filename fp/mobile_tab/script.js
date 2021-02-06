const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })

})

function hideAllContents(){
    contents.forEach(content=>content.classList.remove('show'))
}
function hideAllItems(){
    listItems.forEach(item=>item.classList.remove('active'))
}

// =========== My Solution ================= //

// const contents = document.querySelectorAll('.content')
// const icons = document.querySelectorAll('nav ul li i')
// const liEls = document.querySelectorAll('nav ul li')

// function resetAll(){
//     contents.forEach((item)=>{
//         item.classList.remove('show')
//     })
//     liEls.forEach((item)=>{
//         item.classList.remove('active')
//     })
// }

// icons.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         let index = Array.from(liEls).indexOf(e.target.parentElement)
//         if(index != -1){
//             resetAll()
//             e.target.parentElement.classList.add('active')
//             contents[index].classList.add('show')
//         }
//     })
// })