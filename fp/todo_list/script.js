// const form = document.getElementById('form')
// const input = document.getElementById('input')
// const todosUL = document.getElementById('todos')

// const ls = window.localStorage

// form.addEventListener('submit', e => {
//     // prevent page reload
//     e.preventDefault()
//     addTodo(input.value)
//     // reset input
//     input.value = ''
// })

// function addTodo(input) {
//     const listItem = document.createElement('li')
//     listItem.innerHTML = input
//     let arr = ls.getItem('todos').split(',')
//     arr.push(input)
//     ls.setItem('todos', arr)
//     updateDOM()
// }

// todosUL.addEventListener('click', e => {
//     e.target.classList.toggle('completed')
// })

// // remove a todo 
// todosUL.addEventListener('contextmenu', e => {
//     // grab todo
//     const todo = e.target.innerHTML
//     // prevent normal right click behavior part 1
//     e.preventDefault()
//     let arr = ls.getItem('todos').split(',')
//     // filter out deleted todo
//     arr = arr.filter(item => {
//         return item !== todo
//     })
//     // reset local storage to arr
//     ls.setItem('todos', arr)
//     // update our ul
//     updateDOM()
//     // prevent normal right click behavior part 2
//     return false
// })

// function updateDOM() {
//     todosUL.innerHTML = ''
//     const arr = ls.getItem('todos').split(',')
//     arr.forEach(todo => {
//         if (todo.length !== 0) {
//             const listItem = document.createElement('li')
//             listItem.innerHTML = todo
//             todosUL.appendChild(listItem)
//         }
//     })
// }
// updateDOM()

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

form.addEventListener('submit', e => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if (todo) {
        todoText = todo.text
    }
    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText
        todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'))
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
        })
        todosUL.appendChild(todoEl)
        input.value = ''
    }
}