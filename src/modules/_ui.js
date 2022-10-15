import ProjectFactory from './_project'
import TaskFactory from './_task'
import TaskFormFactory from './_task-form'
import navFormFactory from './_nav-form'
import { main, nav } from '../index'


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

export default UI