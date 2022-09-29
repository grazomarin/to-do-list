import './index.scss';

const main = document.querySelector('.container-main')
const addTask = document.querySelector('.container-main_addTask')
const taskForm = document.querySelector('.container-main-taskForm')
const taskTitle = document.querySelector('.container-main-taskForm-inputs_title')
const taskDescr = document.querySelector('.container-main-taskForm-inputs_description')
const submitTask = document.querySelector('.container-main-taskForm-buttons_submit')

// class TaskFactory {
//     constructor(title, body, completion) {
//         this.title = prompt('Title?', '')
//         this.body
//     }
// }

const TaskManipulator = (() => {
    const closeTaskInput = () => {
        taskForm.style.display = 'none'
        addTask.style.display = 'block'
    }

    const displayTaskInput = () => {
        taskForm.style.display = 'block'
        addTask.style.display = 'none'
    }


    return { displayTaskInput, closeTaskInput }

})()


const TaskFactory = (titleVal, bodyVal) => {
    const title = titleVal
    const body = bodyVal
    const completion = false

    const createTaskTemplate = () => {
        const taskContainer = document.createElement('div')
        taskContainer.classList = 'container-main-task'

        const titleElem = document.createElement('h1')
        titleElem.classList = 'container-main-task_title'
        titleElem.textContent = title

        const bodyElem = document.createElement('p')
        bodyElem.classList = 'container-main-task_body'
        bodyElem.textContent = body

        taskContainer.append(titleElem, bodyElem)
        return taskContainer
    }

    const changeCompletion = () => {
        completion = completion ? false : true;
    }



    return { createTaskTemplate }
}

addTask.addEventListener('click', () => {
    TaskManipulator.displayTaskInput()
})

submitTask.addEventListener('click', () => {
    const newTask = TaskFactory(taskTitle.value, taskDescr.value).createTaskTemplate()
    main.prepend(newTask)
    TaskManipulator.closeTaskInput()
})