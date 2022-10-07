import './index.scss';
import checkImgSrc from './images/icons/check.svg'

const main = document.querySelector('.container-main')
const nav = document.querySelector('.container-nav')

const UI = (() => {

    const myProjects = []

    function initProject() {
        const index = ProjectFactory('Index')
        const indexTaskForm = TaskFormFactory(index)
        UI.resetMain()
        myProjects.push(index)
        UI.displayProjectList()
        indexTaskForm.buildAddTask()

        index.displayProjectTasks()
    }

    const resetMain = () => {
        while (main.children.length != 0) {
            container.children[0].remove()
        }
    }

    const addProject = (project) => {
        myProjects.push(project)
    }

    const displayProjectList = () => {
        myProjects.forEach(project => {
            project.displayProject()
        })
    }

    return {
        myProjects,
        resetMain,
        initProject,
        addProject,
        displayProjectList,
    }
})()


const ProjectFactory = (titleValue) => {
    const myTasks = []
    const title = titleValue

    const addTask = (task) => {
        myTasks.push(task)
    }

    const removeTask = () => {

    }

    const displayProjectTasks = () => {
        //reset main
        myTasks.forEach(task => {
            task = TaskFactory(task.title, task.description)
            task.displayTask()
        });
    }

    const displayProject = () => {
        const projectCont = document.createElement('li')
        projectCont.classList = 'container-nav_project'
        const projectName = document.createElement('span')
        projectName.textContent = title
        const projectTaskCount = document.createElement('span')
        projectTaskCount.textContent = myTasks.length
        projectCont.append(projectName, projectTaskCount)
        nav.prepend(projectCont)
    }

    return {
        title,
        myTasks,
        addTask,
        removeTask,
        displayProjectTasks,
        displayProject,
    }
}


const TaskFactory = (titleVal, bodyVal, completionVal) => {
    const title = titleVal
    const body = bodyVal
    let completion = completionVal === undefined ? false : completionVal
    let clicked = false

    const taskContainer = document.createElement('div')
    const taskInfo = document.createElement('div')
    const checkbox = document.createElement('button')
    const checkImg = new Image(13, 13)
    const titleElem = document.createElement('h1')
    const bodyElem = document.createElement('p')

    const checkboxClick = () => {
        completion = !completion
        !clicked ? checkImg.style.display = 'block' : checkImg.style.display = 'none'
        clicked = !clicked
    }

    const checkboxMouseOver = (image) => {
        if (!clicked) image.style.display = 'block'
    }

    const checkboxMouseOut = (image) => {
        if (!clicked) image.style.display = 'none'
    }

    const initializeTaskEventListeners = (checkbox, image) => {
        checkbox.addEventListener('click', () => { checkboxClick() })
        checkbox.addEventListener('mouseover', () => { checkboxMouseOver(image) })
        checkbox.addEventListener('mouseout', () => { checkboxMouseOut(image) })
    }

    function displayTask() {
        taskContainer.classList = 'container-main-task'
        taskInfo.classList = 'container-main-task-info'
        checkbox.classList = 'container-main-task_checkbox'
        titleElem.classList = 'container-main-task_title'
        bodyElem.classList = 'container-main-task_body'
        checkImg.style.display = completion ? 'block' : 'none'
        titleElem.textContent = title ? title : 'No Title'
        bodyElem.textContent = body
        checkImg.src = checkImgSrc


        initializeTaskEventListeners(checkbox, checkImg)
        checkbox.append(checkImg)
        taskInfo.append(titleElem, bodyElem)
        taskContainer.append(checkbox, taskInfo)
        main.prepend(taskContainer)
    }

    return {
        title,
        body,
        completion,
        displayTask,
        checkboxClick,
        checkboxMouseOver,
        checkboxMouseOut
    }
}


const TaskFormFactory = (parentProject) => {

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
        const newTask = TaskFactory(title.value, body.value, false)
        parentProject.myTasks.push(newTask)
        newTask.displayTask()
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
        newProject.displayProject()
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

//reset main
const navForm = navFormFactory()
navForm.buildNav()
UI.initProject()




// make add project work`