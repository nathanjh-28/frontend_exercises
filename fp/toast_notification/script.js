const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['One','Two','Three','Four','Five',]
const types = ['info','success','error','warning']

button.addEventListener('click',()=>createNotification())

// _______________________________my solution attempt
// let messagesIdx = 0
// function createNotification(){
//     let toast = document.createElement('div')
//     toast.classList.add('toast')
//     toast.innerText = messages[messagesIdx]
//     toasts.appendChild(toast)
//     if(messagesIdx < 4)messagesIdx++
//     else messagesIdx = 0
// }

function createNotification(message=null,type=null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)
    setTimeout(()=>{
        notif.remove()
    },3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}