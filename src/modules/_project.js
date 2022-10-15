import closeImgSrc from '../images/icons/close.svg'

import UI from './_ui'
import TaskFactory from './_task'
import TaskFormFactory from './_task-form'
import navFormFactory from './_nav-form'
import { main, nav } from '../index'


const ProjectFactory = (titleValue) => {
    const myTasks = []
    const title = titleValue

    const projectContainer = document.createElement('li')
    const projectTitle = document.createElement('span')
    const projectTaskCount = document.createElement('span')
    const closeImg = title !== 'Index' ? new Image(13, 13) : new Image(0, 0)


    const displayProjectTasks = () => {
        myTasks.forEach(task => { task.displayTask() });
    }

    const displayProject = () => {
        projectContainer.classList = 'container-nav-project'
        closeImg.classList = 'container-nav-project_close'
        projectTaskCount.classList = 'container-nav-project_count'
        closeImg.src = closeImgSrc
        projectTitle.textContent = title ? title : 'No name'
        projectTaskCount.textContent = myTasks.length

        projectContainer.append(projectTitle, closeImg, projectTaskCount)
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

    const initEventListeners = () => {
        projectContainer.addEventListener('click', () => {
            UI.resetMain()
            makeActive()
            initialize()
        })
        closeImg.addEventListener('click', () => { remove() })
        projectContainer.addEventListener('mouseover', () => { displayClose() })
        projectContainer.addEventListener('mouseout', () => { hideClose() })
    }

    const initialize = (self) => {
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