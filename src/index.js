import './index.scss';
import checkImgSrc from './images/icons/check.svg'
import closeImgSrc from './images/icons/close.svg'
import arrowDownImgSrc from './images/icons/arrow-down.svg'

const main = document.querySelector('.container-main')
const nav = document.querySelector('.container-nav')

const UI = (() => {

    const myProjects = []


    function initProject() {
        const index = ProjectFactory('Index')
        UI.addProject(index)
        UI.resetMain()
        index.displayProject()
        index.initialize(index)
    }

    function resetMain() {
        if (main.children.length != 0) {
            Array.from(main.children).forEach(child => {
                child.remove()
            })
        }
    }

    const addProject = (project) => {
        myProjects.push(project)
    }

    const removeProject = (children) => {
        UI.myProjects.forEach(project => {
            if (project.myTasks === children) {
                UI.myProjects.splice(UI.myProjects.indexOf(project), 1)
            }
        });
    }

    // const displayProjectList = () => {
    //     myProjects.forEach(project => {
    //         project.displayProject()
    //     })
    // }

    return {
        myProjects,
        resetMain,
        initProject,
        addProject,
        removeProject,
        // displayProjectList,
    }
})()


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
        projectTitle.textContent = title
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
        projectTasks.find(task => { if (task.title === title || task.body === body) projectTasks.splice(projectTasks.indexOf(task), 1) })
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


const TaskFactory = (titleVal, bodyVal, completionVal, project) => {
    const title = titleVal
    const body = bodyVal
    let completion = completionVal
    let clicked = false

    const taskContainer = document.createElement('div')
    const taskInfo = document.createElement('div')
    const checkbox = document.createElement('button')
    const checkImg = new Image(11, 11)
    const closeImg = new Image(18, 18)
    const arrowDownImg = new Image(18, 18)
    const titleCont = document.createElement('div')
    const titleElem = document.createElement('p')
    const bodyElem = document.createElement('p')

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
        closeImg.style.display = 'block'
        arrowDownImg.style.display = 'block'
    }

    const hideIcons = () => {
        closeImg.style.display = 'none'
        arrowDownImg.style.display = 'none'
    }

    const changeBodyVisibility = () => {
        bodyElem.style.display === 'block' ? bodyElem.style.display = 'none' : bodyElem.style.display = 'block'
    }

    const initializeTaskEventListeners = () => {
        taskContainer.addEventListener('mouseover', () => { displayIcons() })
        taskContainer.addEventListener('mouseout', () => { hideIcons() })
        checkbox.addEventListener('click', () => { changeCompletion() })
        checkbox.addEventListener('mouseover', () => { checkboxMouseOver() })
        checkbox.addEventListener('mouseout', () => { checkboxMouseOut() })
        closeImg.addEventListener('click', () => { remove() })
        arrowDownImg.addEventListener('click', () => { changeBodyVisibility() })
    }

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        taskInfo.classList = 'container-main-task-info'
        checkbox.classList = 'container-main-task-info-titleCont_checkbox'
        closeImg.classList = 'container-main-task-info-titleCont_close'
        arrowDownImg.classList = 'container-main-task-info-titleCont_arrowDown'
        titleCont.classList = 'container-main-task-info-titleCont'
        titleElem.classList = 'container-main-task-info-titleCont_title'
        bodyElem.classList = 'container-main-task-info_body'

        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title ? title : 'No Title'
        bodyElem.textContent = body

        closeImg.src = closeImgSrc
        checkImg.src = checkImgSrc
        arrowDownImg.src = arrowDownImgSrc


        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        titleCont.append(checkbox, titleElem, arrowDownImg, closeImg)
        taskInfo.append(titleCont, bodyElem)
        taskContainer.append(taskInfo)
        main.prepend(taskContainer)
    }

    console.log(UI.myProjects);

    return {
        title,
        body,
        completion,
        displayTask,
    }
}


const TaskFormFactory = (project) => {

    const addTaskLine = document.createElement('div')
    const taskForm = document.createElement('form')
    const inputs = document.createElement('div')
    const title = document.createElement('input')
    const body = document.createElement('textarea')
    const buttons = document.createElement('div')
    const cancel = document.createElement('button')
    const submit = document.createElement('button')

    const buildAddTask = () => {
        addTaskLine.classList = 'container-main_addTask'
        taskForm.classList = 'container-main-taskForm'
        inputs.classList = 'container-main-taskForm-inputs'
        title.classList = 'container-main-taskForm-inputs_title'
        body.classList = 'container-main-taskForm-inputs_description'
        buttons.classList = 'container-main-taskForm-buttons'
        cancel.classList = 'container-main-taskForm-buttons_cancel'
        submit.classList = 'container-main-taskForm-buttons_submit'

        addTaskLine.textContent = 'add task'
        cancel.textContent = 'cancel'
        submit.textContent = 'submit'

        title.setAttribute('placeholder', 'Title')
        body.setAttribute('rows', '3')
        body.setAttribute('multiline', 'false')
        body.setAttribute('placeholder', 'Description')
        cancel.setAttribute('type', 'reset')
        submit.setAttribute('type', 'reset')

        buttons.append(cancel, submit)
        inputs.append(title, body)
        taskForm.append(inputs, buttons)
        main.append(addTaskLine, taskForm)
        initEventListeners()
    }

    const initEventListeners = () => {
        addTaskLine.addEventListener('click', () => { showAddTask() })
        cancel.addEventListener('click', () => { hideAddTask() })
        submit.addEventListener('click', () => { submitTask() })
    }

    const submitTask = () => {
        const task = TaskFactory(title.value, body.value, false, project)
        project.submitTask(task)
        task.displayTask()
        hideAddTask()
    }

    const showAddTask = () => {
        addTaskLine.style.display = 'none'
        taskForm.style.display = 'block'
    }

    const hideAddTask = () => {
        addTaskLine.style.display = 'block'
        taskForm.style.display = 'none'
    }

    console.log(UI.myProjects);


    return {
        buildAddTask,
        hideAddTask,
        showAddTask,
        submitTask,
        initEventListeners,
    }
}


const navFormFactory = () => {
    const addProjectLine = document.createElement('div')
    const projectForm = document.createElement('form')
    const title = document.createElement('input')
    const buttons = document.createElement('div')
    const cancel = document.createElement('button')
    const submit = document.createElement('button')

    const buildNav = () => {
        addProjectLine.classList = 'container-nav_addProject'
        projectForm.classList = 'container-nav-projectForm'
        title.classList = 'container-nav-projectForm_title'
        buttons.classList = 'container-nav-projectForm-buttons'
        cancel.classList = 'container-nav-projectForm-buttons_cancel'
        submit.classList = 'container-nav-projectForm-buttons_submit'

        addProjectLine.textContent = 'add project'
        cancel.textContent = 'cancel'
        submit.textContent = 'submit'

        title.setAttribute('placeholder', 'Title')
        cancel.setAttribute('type', 'reset')
        submit.setAttribute('type', 'reset')

        buttons.append(cancel, submit)
        projectForm.append(title, buttons)
        nav.append(addProjectLine, projectForm)
        initEventListeners()
    }

    const initEventListeners = () => {
        addProjectLine.addEventListener('click', () => { showAddTask() })
        cancel.addEventListener('click', () => { hideAddTask() })
        submit.addEventListener('click', () => { submitTask() })
    }

    const submitTask = () => {
        const newProject = ProjectFactory(title.value)
        UI.addProject(newProject)
        UI.resetMain()
        newProject.displayProject()
        newProject.initialize(newProject)
        hideAddTask()
    }

    const showAddTask = () => {
        addProjectLine.style.display = 'none'
        projectForm.style.display = 'flex'
    }

    const hideAddTask = () => {
        addProjectLine.style.display = 'block'
        projectForm.style.display = 'none'
    }


    return {
        buildNav,
    }

}

const navForm = navFormFactory()
navForm.buildNav()
UI.initProject()






