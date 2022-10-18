import closeImgSrc from '../images/icons/close.svg'

import UI from './_ui'
import TaskFactory from './_task'
import TaskFormFactory from './_task-form'
import navFormFactory from './_nav-form'
import { main, nav } from '../index'


const ProjectFactory = (titleValue) => {
    const myTasks = []
    let title = titleValue

    const projectContainer = document.createElement('li')
    let projectTitle = document.createElement('span')
    const projectTitleInput = document.createElement('input')
    const projectTaskCount = document.createElement('span')
    const closeImg = title !== 'Index' ? new Image(13, 13) : new Image(0, 0)


    const displayProjectTasks = () => {
        myTasks.forEach(task => { task.displayTask() });
    }

    const displayProject = () => {
        projectContainer.classList = 'container-nav-project'
        closeImg.classList = 'container-nav-project_close'
        projectTaskCount.classList = 'container-nav-project_count'
        projectTitleInput.classList = 'container-nav-project_input'

        closeImg.src = closeImgSrc
        projectTitle.textContent = title || 'No name'
        projectTaskCount.textContent = myTasks.length

        projectContainer.append(projectTitle, projectTitleInput, closeImg, projectTaskCount)
        nav.prepend(projectContainer)
        initEventListeners()
    }

    const displayClose = () => {
        closeImg.style.display = 'block'
    }

    const hideClose = () => {
        closeImg.style.display = 'none'
    }

    const remove = () => {
        UI.removeProject(myTasks)
        projectContainer.remove()
    }

    const enableTitleEditor = () => {
        projectTitle.style.display = 'none'
        projectTitleInput.style.display = 'block'
        projectTitleInput.setAttribute('value', title)
    }

    const disableTitleEditor = () => {
        projectTitle.style.display = 'block'
        projectTitleInput.style.display = 'none'
    }

    const enableTitleEditorInteraction = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            title = projectTitleInput.value || title
            projectTitle.textContent = title
            disableTitleEditor()
        } else if (event.key === 'Esc') {
            event.preventDefault()
            disableTitleEditor()
        }
    }

    const initEventListeners = () => {
        projectContainer.addEventListener('click', () => {
            if (!projectContainer.classList.contains("container-nav-project--active")) { initialize() }
        })
        closeImg.addEventListener('click', () => { remove() })
        projectContainer.addEventListener('mouseover', () => { displayClose() })
        projectContainer.addEventListener('mouseout', () => { hideClose() })
        projectTitle.addEventListener('click', () => { enableTitleEditor() })
        projectTitleInput.addEventListener('keypress', (event) => { enableTitleEditorInteraction(event) })
    }

    const initialize = (self) => {
        UI.resetMain()
        displayProjectTasks()
        makeActive()
        const myForm = TaskFormFactory(self)
        myForm.buildAddTask()
    }

    const makeActive = () => {
        Array.from(nav.children).forEach(project => { project.classList.remove('container-nav-project--active') });
        projectContainer.classList.add('container-nav-project--active')
    }

    const submitTask = (task) => {
        myTasks.push(task)
        projectTaskCount.textContent = myTasks.length
    }

    const changeTaskCompletion = (title, body) => {
        myTasks.find(task => { if (task.title === title && task.body === body) task.completion = !task.completion })
    }

    const removeTask = (title, body) => {
        myTasks.find(task => { if (task.title === title || task.body === body) myTasks.splice(myTasks.indexOf(task), 1) })
        projectTaskCount.textContent = myTasks.length
    }

    return {
        title,
        myTasks,
        initialize,
        displayProjectTasks,
        displayProject,
        submitTask,
        changeTaskCompletion,
        removeTask,
    }
}

export default ProjectFactory