import checkImgSrc from '../images/icons/check.svg'
import arrowDownImgSrc from '../images/icons/arrow-down.svg'

import UI from './_ui'
import ProjectFactory from './_project'
import TaskFormFactory from './_task-form'
import navFormFactory from './_nav-form'
import { main, nav } from '../index'


const TaskFactory = (titleVal, bodyVal, completionVal, dateVal, project) => {
    const title = titleVal
    const body = bodyVal
    const date = dateVal
    let completion = completionVal
    let clicked = false

    const taskContainer = document.createElement('div')
    const checkbox = document.createElement('button')
    const checkImg = new Image(11, 11)
    const arrowDownImg = new Image(18, 18)
    const titleCont = document.createElement('div')
    const titleElem = document.createElement('p')
    const bodyElem = document.createElement('p')
    const dateText = document.createElement('p')
    const buttonCont = document.createElement('div')
    const deleteBtn = document.createElement('button')

    const changeCompletion = () => {
        project.changeTaskCompletion(title, body)
        completion = !completion
        !clicked ? checkImg.style.display = 'block' : checkImg.style.display = 'none'
        clicked = !clicked
    }

    const remove = () => {
        project.removeTask(title, body)
        taskContainer.remove()
    }

    const checkboxMouseOver = () => {
        if (!clicked) checkImg.style.display = 'block'
    }

    const checkboxMouseOut = () => {
        if (!clicked) checkImg.style.display = 'none'
    }

    const displayIcons = () => {
        arrowDownImg.style.display = 'block'
    }

    const hideIcons = () => {
        arrowDownImg.style.display = 'none'
    }

    const changeBodyVisibility = () => {
        bodyElem.style.display === 'block' ? bodyElem.style.display = 'none' : bodyElem.style.display = 'block'
        buttonCont.style.display === 'flex' ? buttonCont.style.display = 'none' : buttonCont.style.display = 'flex'
    }

    const initializeTaskEventListeners = () => {
        taskContainer.addEventListener('mouseover', () => { displayIcons() })
        taskContainer.addEventListener('mouseout', () => { hideIcons() })
        checkbox.addEventListener('click', () => { changeCompletion() })
        checkbox.addEventListener('mouseover', () => { checkboxMouseOver() })
        checkbox.addEventListener('mouseout', () => { checkboxMouseOut() })
        deleteBtn.addEventListener('click', () => { remove() })
        arrowDownImg.addEventListener('click', () => { changeBodyVisibility() })
    }

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        checkbox.classList = 'container-main-task-titleCont_checkbox'
        buttonCont.classList = 'container-main-task-buttons'
        deleteBtn.classList = 'container-main-task-buttons_delete'
        arrowDownImg.classList = 'container-main-task-titleCont_arrowDown'
        titleCont.classList = 'container-main-task-titleCont'
        titleElem.classList = 'container-main-task-titleCont_title'
        dateText.classList = 'container-main-task-titleCont_dateTxt'
        bodyElem.classList = 'container-main-task_body'

        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title || 'No title'
        bodyElem.textContent = body || 'No description'  //create a seperate function for this
        dateText.textContent = date ? `due ${date}` : 'No date'
        deleteBtn.textContent = 'Delete'

        checkImg.src = checkImgSrc
        arrowDownImg.src = arrowDownImgSrc


        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        titleCont.append(checkbox, titleElem, arrowDownImg, dateText)
        buttonCont.append(deleteBtn)
        taskContainer.append(titleCont, bodyElem, buttonCont)
        main.prepend(taskContainer)
    }

    console.log(UI.myProjects);

    return {
        title,
        body,
        completion,
        date,
        displayTask,
    }
}

export default TaskFactory