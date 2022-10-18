import UI from './_ui'
import ProjectFactory from './_project'
import TaskFactory from './_task'
import navFormFactory from './_nav-form'
import { main, nav } from '../index'
import Pikaday from 'pikaday'


const TaskFormFactory = (project) => {
    const addTaskLine = document.createElement('div')
    const taskForm = document.createElement('form')
    const inputs = document.createElement('div')
    const title = document.createElement('input')
    const body = document.createElement('textarea')
    const buttons = document.createElement('div')
    const cancel = document.createElement('button')
    const submit = document.createElement('button')
    const dateBtn = document.createElement('button')
    const datePicker = new Pikaday({
        field: dateBtn,
        format: 'D/M/YYYY',
        minDate: new Date(),
        onSelect: function () {
            dateBtn.textContent = this.getMoment().format('DD MMM')
        },
        toString: function (date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        },
    });

    const buildAddTask = () => {
        addTaskLine.classList = 'container-main_addTask'
        taskForm.classList = 'container-main-taskForm'
        inputs.classList = 'container-main-taskForm-inputs'
        title.classList = 'container-main-taskForm-inputs_title'
        body.classList = 'container-main-taskForm-inputs_description'
        dateBtn.classList = 'container-main-taskForm-inputs_date'
        buttons.classList = 'container-main-taskForm-buttons'
        cancel.classList = 'container-main-taskForm-buttons_cancel'
        submit.classList = 'container-main-taskForm-buttons_submit'

        addTaskLine.textContent = 'add task'
        cancel.textContent = 'cancel'
        submit.textContent = 'submit'
        dateBtn.textContent = 'set date'

        title.setAttribute('placeholder', 'Title')
        body.setAttribute('rows', '3')
        body.setAttribute('multiline', 'false')
        body.setAttribute('placeholder', 'Description')
        cancel.setAttribute('type', 'reset')
        submit.setAttribute('type', 'reset')
        dateBtn.setAttribute('type', 'button')

        buttons.append(cancel, submit)
        inputs.append(title, body, dateBtn)
        taskForm.append(inputs, buttons)
        main.append(addTaskLine, taskForm)
        initEventListeners()
    }

    const initKeyboardListener = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            submit.click();
        } else if (event.key === 'Space') {
            event.preventDefault()
            cancel.click()
        }
    }

    const initEventListeners = () => {
        addTaskLine.addEventListener('click', () => { showAddTask() })
        cancel.addEventListener('click', () => {
            hideAddTask()
            resetInputs()
        })
        submit.addEventListener('click', () => {
            submitTask()
            resetInputs()
        })
        title.addEventListener('keypress', (event) => { initKeyboardListener(event) })
        body.addEventListener('keypress', (event) => { initKeyboardListener(event) })
    }

    const submitTask = () => {
        const task = TaskFactory(title.value, body.value, false, datePicker.toString(), project)
        project.submitTask(task)
        task.displayTask()
        hideAddTask()
    }

    const resetInputs = () => {
        dateBtn.textContent = 'set date'
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

export default TaskFormFactory