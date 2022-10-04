import './index.scss';
import checkImgSrc from './images/icons/check.svg'

const main = document.querySelector('.container-main')
const addTaskButton = document.querySelector('.container-main_addTask')
const taskForm = document.querySelector('.container-main-taskForm')
const taskTitle = document.querySelector('.container-main-taskForm-inputs_title')
const taskDescr = document.querySelector('.container-main-taskForm-inputs_description')
const submitTaskButton = document.querySelector('.container-main-taskForm-buttons_submit')
const closeTaskButton = document.querySelector('.container-main-taskForm-buttons_cancel')
const task = document.querySelector('.container-main-task')


const TaskDOMManipulation = (() => {
    const closeTaskInput = () => {
        taskForm.style.display = 'none'
        addTaskButton.style.display = 'block'
    }

    const displayTaskInput = () => {
        taskForm.style.display = 'block'
        addTaskButton.style.display = 'none'
    }

    const checkboxClick = (task, image, clicked) => {

    }

    const checkboxMouseOver = (image, clicked) => {
        if (!clicked) image.style.display = 'block'
    }

    const checkboxMouseOut = (image, clicked) => {
        if (!clicked) image.style.display = 'none'
    }

    const initializeTaskEventListeners = (task, checkbox, image) => {
        //get rid of clicked
        let clicked = false
        checkbox.addEventListener('click', () => {
            TaskDataManipulation.changeCompletion(task)
            console.log(TaskDataManipulation.myTasks);
            !clicked ? image.style.display = 'block' : image.style.display = 'none'
            clicked = !clicked
        })
        checkbox.addEventListener('mouseover', () => { TaskDOMManipulation.checkboxMouseOver(image, clicked) })
        checkbox.addEventListener('mouseout', () => { TaskDOMManipulation.checkboxMouseOut(image, clicked) })
    }

    const displayTask = (task) => {
        const taskContainer = document.createElement('div')
        taskContainer.classList = 'container-main-task'

        const taskInfo = document.createElement('div')
        taskInfo.classList = 'container-main-task-info'

        const checkbox = document.createElement('button')
        checkbox.classList = 'container-main-task_checkbox'

        const checkImg = new Image(13, 13)
        checkImg.src = checkImgSrc
        checkImg.style.display = 'none'

        const titleElem = document.createElement('h1')
        titleElem.classList = 'container-main-task_title'
        titleElem.textContent = task.title

        const bodyElem = document.createElement('p')
        bodyElem.classList = 'container-main-task_body'
        bodyElem.textContent = task.body

        TaskDOMManipulation.initializeTaskEventListeners(task, checkbox, checkImg)
        checkbox.append(checkImg)
        taskInfo.append(titleElem, bodyElem)
        taskContainer.append(checkbox, taskInfo)
        main.prepend(taskContainer)
    }

    return {
        displayTaskInput,
        closeTaskInput,
        displayTask,
        initializeTaskEventListeners,
        checkboxClick,
        checkboxMouseOver,
        checkboxMouseOut
    }

})()


const TaskDataManipulation = (() => {
    const myTasks = []

    const addTask = (task) => {
        myTasks.push(task)
    }

    const changeCompletion = (task) => {
        task.completion = !task.completion
    }

    return { myTasks, addTask, changeCompletion }
})()

const TaskFactory = (titleVal, bodyVal) => {
    const title = titleVal
    const body = bodyVal
    const completion = false

    return { title, body, completion }
}

addTaskButton.addEventListener('click', () => {
    TaskDOMManipulation.displayTaskInput()
})

submitTaskButton.addEventListener('click', () => {
    const newTask = TaskFactory(taskTitle.value, taskDescr.value)
    TaskDOMManipulation.displayTask(task)
    TaskDataManipulation.addTask(newTask)
    TaskDOMManipulation.closeTaskInput()
})

closeTaskButton.addEventListener('click', () => {
    TaskDOMManipulation.closeTaskInput()
})


