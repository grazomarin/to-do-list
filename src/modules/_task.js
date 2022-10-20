import checkImgSrc from '../images/icons/check.svg'
import arrowDownImgSrc from '../images/icons/arrow-down.svg'

import UI from './_ui'
import ProjectFactory from './_project'
import TaskFormFactory from './_task-form'
import navFormFactory from './_nav-form'
import { main, nav } from '../index'
import Pikaday from 'pikaday'


const TaskFactory = (titleVal, bodyVal, completionVal, dateObj, project) => {
    let title = titleVal
    let body = bodyVal
    let date = dateObj.toString()
    let completion = completionVal
    let clicked = false

    const ID = Math.random()

    const taskContainer = document.createElement('div')
    const checkbox = document.createElement('button')
    const checkImg = new Image(11, 11)
    const arrowDownImg = new Image(18, 18)
    const titleCont = document.createElement('div')
    const titleElem = document.createElement('p')
    const titleInput = document.createElement('input')
    const bodyElem = document.createElement('p')
    const bodyInput = document.createElement('textarea')
    const buttonCont = document.createElement('div')
    const deleteBtn = document.createElement('button')
    const dateText = document.createElement('p')
    const dateTextEditor = new Pikaday({
        field: dateText,
        format: 'D.M.YYYY',
        minDate: new Date(),
        onSelect: function () {
            dateText.textContent = `due ${this.getMoment().format('DD.MM.YY')}`
            updateTask()
        },
        toString: function (date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear().toString().slice(-2);
            return `${day}.${month}.${year}`;
        }
    });

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        checkbox.classList = 'container-main-task-titleCont_checkbox'
        buttonCont.classList = 'container-main-task-buttons'
        deleteBtn.classList = 'container-main-task-buttons_delete'
        arrowDownImg.classList = 'container-main-task-titleCont_arrowDown'
        titleCont.classList = 'container-main-task-titleCont'
        titleElem.classList = 'container-main-task-titleCont_title'
        titleInput.classList = 'container-main-task-titleCont_title_input'
        dateText.classList = 'container-main-task-titleCont_dateTxt'
        bodyElem.classList = 'container-main-task_body'
        bodyInput.classList = 'container-main-task_body_input'

        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title || 'No title'
        bodyElem.textContent = body || 'No description'  //create a seperate function for this
        bodyInput.setAttribute('multiline', 'false')
        bodyInput.setAttribute('rows', '4')
        dateText.textContent = date ? `due ${date}` : 'No date'
        dateTextEditor.field = dateText
        deleteBtn.textContent = 'Delete'

        checkImg.src = checkImgSrc
        arrowDownImg.src = arrowDownImgSrc

        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        titleCont.append(checkbox, titleElem, titleInput, arrowDownImg, dateText)
        buttonCont.append(deleteBtn)
        taskContainer.append(titleCont, bodyElem, bodyInput, buttonCont)
        main.prepend(taskContainer)
    }

    const updateTask = () => {
        project.myTasks.find(task => {
            if (task.ID === ID) {
                task.date = dateTextEditor.toString()
                task.title
                task.body
                console.log(UI.myProjects);
            }
        })
    }

    const changeCompletion = () => {
        project.changeTaskCompletion(ID)
        completion = !completion
        !clicked ? checkImg.style.display = 'block' : checkImg.style.display = 'none'
        clicked = !clicked
    }

    const remove = () => {
        project.removeTask(ID)
        taskContainer.remove()
    }

    const enableEditor = (holder, input) => {
        holder.style.display = 'none'
        input.style.display = 'block'
        input.setAttribute('value', holder.textContent)
        input.textContent = holder.textContent
    }

    const disableEditor = (holder, input) => {
        holder.style.display = 'block'
        input.style.display = 'none'
    }

    const enableEditorInteraction = (event, holder, input) => {
        if (event.key === "Enter") {
            event.preventDefault()
            if (holder === titleElem) {
                title = input.value || title
                holder.textContent = title
            } else {
                body = input.value || body
                holder.textContent = body
            }
            updateTask()
            disableEditor(holder, input)
        } else if (event.key === 'Esc') {
            event.preventDefault()
            disableEditor(holder, input)
        }
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
        titleElem.addEventListener('click', () => { enableEditor(titleElem, titleInput) })
        bodyElem.addEventListener('click', () => { enableEditor(bodyElem, bodyInput) })
        titleInput.addEventListener('keypress', (event) => { enableEditorInteraction(event, titleElem, titleInput) })
        bodyInput.addEventListener('keypress', (event) => { enableEditorInteraction(event, bodyElem, bodyInput) })
    }


    console.log(UI.myProjects);

    return {
        title,
        body,
        completion,
        date,
        ID,
        displayTask,
    }
}

export default TaskFactory