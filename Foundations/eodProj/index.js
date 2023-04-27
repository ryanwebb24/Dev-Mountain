let task = [{name:'take out trash', priority:"swag" },{name:'dishes', priority:"swag" }]
const taskDisplay = document.querySelector('#task-display')
let newTaskForm = document.querySelector('#new-task-form')

const buildTasks = (tasks) => {
    taskDisplay.innerHTML = ''
    tasks.forEach(task => {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        taskDiv.innerHTML = `<input type="checkbox"/>
        <p>${task.name}</p>
        <p>${task.priority}</p>
        <img
          class='trash-can'
          src='https://www.freeiconspng.com/thumbs/trash-can-icon/trash-can-icon-26.png'
          alt='trash'
        />`
        taskDisplay.appendChild(taskDiv)
    })
}

const addTask = (event) => {
  event.preventDefault()
  let taskName = document.getElementById('new-task-name')
  let taskPriority = document.getElementById('new-task-priority')
  let newTask = {
    name: taskName.value,
    priority: taskPriority.value
  }
  task.push(newTask)
  buildTasks(task)
}

newTaskForm.addEventListener('submit', addTask)
buildTasks(task) 