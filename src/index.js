import './index.scss';
import checkImgSrc from './images/icons/check.svg'

const main = document.querySelector('.container-main')
const addTask = document.querySelector('.container-main_addTask')
const taskForm = document.querySelector('.container-main-taskForm')
const taskTitle = document.querySelector('.container-main-taskForm-inputs_title')
const taskDescr = document.querySelector('.container-main-taskForm-inputs_description')
const submitTask = document.querySelector('.container-main-taskForm-buttons_submit')
const task = document.querySelector('.container-main-task')


const TaskManipulator = (() => {
    const closeTaskInput = () => {
        taskForm.style.display = 'none'
        addTask.style.display = 'block'
    }

    const displayTaskInput = () => {
        taskForm.style.display = 'block'
        addTask.style.display = 'none'
    }

    const changeCompletion = () => {
        taskForm.classList.toggle('.container-main-task--disabled')
    }

    const checkboxInteraction = (checkbox, image) => {
        let clicked = false;
        let active = false;


        checkbox.addEventListener('mouseover', () => {
            if (!clicked) image.style.display = 'block'
        })

        checkbox.addEventListener('mouseout', () => {
            if (!clicked) image.style.display = 'none'
        })

        checkbox.addEventListener('click', () => {
            !clicked ? image.style.display = 'block' : image.style.display = 'block';
            clicked = !clicked
        })

    }


    return { displayTaskInput, closeTaskInput, changeCompletion, checkboxInteraction }

})()



const TaskFactory = (titleVal, bodyVal) => {
    const title = titleVal
    const body = bodyVal
    const completion = false

    const createTaskTemplate = () => {
        const taskContainer = document.createElement('div')
        taskContainer.classList = 'container-main-task'

        const taskInfo = document.createElement('div')
        taskInfo.classList = 'container-main-task-info'

        const checkbox = document.createElement('button')
        checkbox.classList = 'container-main-task_checkbox'

        const checkImg = new Image(13, 13)
        checkImg.src = checkImgSrc
        checkImg.style.display = 'none'
        TaskManipulator.checkboxInteraction(checkbox, checkImg)

        const titleElem = document.createElement('h1')
        titleElem.classList = 'container-main-task_title'
        titleElem.textContent = title

        const bodyElem = document.createElement('p')
        bodyElem.classList = 'container-main-task_body'
        bodyElem.textContent = body

        checkbox.append(checkImg)
        taskInfo.append(titleElem, bodyElem)
        taskContainer.append(checkbox, taskInfo)
        return taskContainer
    }

    const changeCompletion = () => {
        completion = completion ? false : true;
        TaskManipulator.changeCompletion()
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
