// UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners();
function loadEventListeners(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded',getTasks)
    // Add task event
    form.addEventListener('submit', addTask)
    // remove task event
    taskList.addEventListener('click',removeTask)
    //Clear all tasks event
    clearBtn.addEventListener('click',clearTasks)
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

// Get Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(task));

    // Create New link element

    const link = document.createElement('a');
    
    // Add classes
    link.className = 'delete-item secondary-content';
    
    //Add icon html
    link.innerHTML = '<i class="fas fa-times"></i>'
    
    // append to li
    li.appendChild(link);
    
    // append li to ul
    taskList.appendChild(li);

    })

}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('add a task');
    }

    //Create li elemenent

    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    // Create New link element

    const link = document.createElement('a');
    
    // Add classes
    link.className = 'delete-item secondary-content';
    
    //Add icon html
    link.innerHTML = '<i class="fas fa-times"></i>'
    
    // append to li
    li.appendChild(link);
    
    // append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(taskInput.value)

    // clear input
    taskInput.value = '';

    e.preventDefault();

}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?'))
        e.target.parentElement.parentElement.remove()
        // remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    }
}

// remove from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTasks(){
    //taskList.innerHTML = '';

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

    // Clear Tasks
    clearTasksFromLocalStorage();
}

// clear tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}