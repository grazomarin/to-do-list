import closeImgSrc from '../images/icons/close.svg'

import UI from './_ui'
import TaskFormFactory from './_task-form'
import { nav } from '../index'
import TaskFactory from './_task'


const ProjectFactory = (titleValue, IDval) => {
    const myTasks = []
    let title = titleValue
    const projectContainer = document.createElement('li')
    let projectTitle = document.createElement('span')
    const titleInput = document.createElement('input')
    const projectTaskCount = document.createElement('span')
    const closeImg = title !== 'Index' ? new Image(13, 13) : new Image(0, 0)

    const ID = IDval || Math.random()

    const displayProjectTasks = () => {
        myTasks.forEach(storedTask => {
            const task = TaskFactory(storedTask.title, storedTask.body, storedTask.completion, storedTask.date, storedTask.ID, ID)
            task.displayTask()
        });
    }

    const displayProject = () => {
        projectContainer.classList = 'container-nav-project'
        closeImg.classList = 'container-nav-project_close'
        projectTaskCount.classList = 'container-nav-project_count'
        titleInput.classList = 'container-nav-project_input'

        closeImg.src = closeImgSrc
        projectTitle.textContent = title || 'No name'
        projectTaskCount.textContent = myTasks.length

        projectContainer.append(projectTitle, titleInput, closeImg, projectTaskCount)
        nav.insertBefore(projectContainer, document.querySelector('.container-nav_addProject'))
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
        titleInput.style.display = 'block'
        titleInput.setAttribute('value', title)
    }

    const disableTitleEditor = () => {
        projectTitle.style.display = 'block'
        titleInput.style.display = 'none'
    }

    const updateProject = () => {
        UI.myProjects.forEach(project => {
            if (project.ID === ID) {
                project.title = title
            }
        });

        localStorage['projects'] = JSON.stringify(UI.myProjects)
    }

    const enableTitleEditorInteraction = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            title = titleInput.value || title
            projectTitle.textContent = title
            updateProject()
            disableTitleEditor()
        } else if (event.key === 'Esc') {
            event.preventDefault()
            disableTitleEditor()
        }
    }

    const initEventListeners = () => {
        projectContainer.addEventListener('click', () => {
            if (!projectContainer.classList.contains("container-nav-project--active")) { UI.initializeProj(ID) }
        })
        closeImg.addEventListener('click', () => { remove() })
        projectContainer.addEventListener('mouseover', () => { displayClose() })
        projectContainer.addEventListener('mouseout', () => { hideClose() })
        projectTitle.addEventListener('click', () => { enableTitleEditor() })
        titleInput.addEventListener('keypress', (event) => { enableTitleEditorInteraction(event) })
    }

    const makeActive = () => {
        Array.from(nav.children).forEach(project => { project.classList.remove('container-nav-project--active') });
        projectContainer.classList.add('container-nav-project--active')
    }

    const submitTask = (task) => {
        myTasks.push(task)
        projectTaskCount.textContent = myTasks.length
        localStorage['projects'] = JSON.stringify(UI.myProjects)
    }

    const changeTaskCompletion = (ID) => {
        myTasks.find(task => { if (task.ID === ID) task.completion = !task.completion })
    }

    const removeTask = (ID) => {
        myTasks.find(task => { if (task.ID === ID) myTasks.splice(myTasks.indexOf(task), 1) })
        projectTaskCount.textContent = myTasks.length
        localStorage['projects'] = JSON.stringify(UI.myProjects)
    }

    return {
        title,
        myTasks,
        ID,
        displayProjectTasks,
        displayProject,
        submitTask,
        changeTaskCompletion,
        removeTask,
        makeActive
    }
}

export default ProjectFactory