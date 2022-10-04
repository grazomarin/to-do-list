import './index.scss';
import checkImgSrc from './images/icons/check.svg'

const main = document.querySelector('.container-main')
const addTaskButton = document.querySelector('.container-main_addTask')
const taskForm = document.querySelector('.container-main-taskForm')
const submitTaskButton = document.querySelector('.container-main-taskForm-buttons_submit')
const closeTaskButton = document.querySelector('.container-main-taskForm-buttons_cancel')
const taskTitle = document.querySelector('.container-main-taskForm-inputs_title')
const taskDescr = document.querySelector('.container-main-taskForm-inputs_description')
const task = document.querySelector('.container-main-task')

const nav = document.querySelector('.container-nav')
const addProjectButton = document.querySelector('.container-nav_addProject')
const projectForm = document.querySelector('.container-nav-projectForm')
const submitProjectButton = document.querySelector('.container-nav-projectForm-buttons_submit')
const closeProjectButton = document.querySelector('.container-nav-projectForm-buttons_cancel')
const projectTitle = document.querySelector('.container-nav-projectForm_title')


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

    const checkboxMouseOver = (image) => {
        if (image.style.display = 'none') image.style.display = 'block'
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
        checkbox.addEventListener('mouseover', () => { TaskDOMManipulation.checkboxMouseOver(image) })
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

    //do not return mytasks
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
    TaskDOMManipulation.displayTask(newTask)
    TaskDataManipulation.addTask(newTask)
    TaskDOMManipulation.closeTaskInput()
})

closeTaskButton.addEventListener('click', () => {
    TaskDOMManipulation.closeTaskInput()
})




const ProjectFactory = (titleValue) => {
    const myTasks = [] //implement this
    const title = titleValue
    return { title }
}

const ProjectDOMManipulation = (() => {
    const closeProjectInput = () => {
        projectForm.style.display = 'none'
        addProjectButton.style.display = 'block'
    }

    const displayProjectInput = () => {
        projectForm.style.display = 'flex'
        addProjectButton.style.display = 'none'
    }

    const displayProject = (project) => {
        const projectCont = document.createElement('li')
        projectCont.classList = 'container-nav_project'

        const title = document.createElement('span')
        title.textContent = project.title

        projectCont.append(title)
        nav.insertBefore(projectCont, addProjectButton)
    }

    return {
        closeProjectInput,
        displayProjectInput,
        displayProject
    }

})()

const ProjectDataManipulation = (() => {
    const myProjects = []

    const addProject = (project) => {
        myProjects.push(project)
    }

    return { addProject }
})()


addProjectButton.addEventListener('click', () => {
    ProjectDOMManipulation.displayProjectInput()
})

closeTaskButton.addEventListener('click', () => {
    ProjectDOMManipulation.closeProjectInput()
})


submitProjectButton.addEventListener('click', () => {
    const newProject = ProjectFactory(projectTitle.value)
    ProjectDOMManipulation.displayProject(newProject)
    ProjectDataManipulation.addProject(newProject)
    ProjectDOMManipulation.closeProjectInput()
})




