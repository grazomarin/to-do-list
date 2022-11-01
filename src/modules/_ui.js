import ProjectFactory from './_project';
import navFormFactory from './_nav-form';
import TaskFormFactory from './_task-form';
import storage from './_storage';
import { main } from '../index';

const UI = (() => {
	const myProjects = [];

	function firstLoad() {
		const index = ProjectFactory('Index');
		UI.addProject(index);
		UI.resetMain();
		index.displayProject();
		UI.initializeProj(index.ID);
		const navForm = navFormFactory();
		navForm.buildNav();
	}

	function resetMain() {
		if (main.children.length !== 0) {
			Array.from(main.children).forEach((child) => {
				child.remove();
			});
		}
	}

	const addProject = (project) => {
		myProjects.push(project);

		localStorage.projects = JSON.stringify(myProjects);
	};

	const removeProject = (children) => {
		UI.myProjects.forEach((project) => {
			if (project.myTasks === children) {
				UI.myProjects.splice(UI.myProjects.indexOf(project), 1);
			}
		});

		localStorage.projects = JSON.stringify(UI.myProjects);
	};

	const loadHomepage = () => {
		storage.loadAll();
		UI.displayProjects();
		navFormFactory().buildNav();
	};

	const displayProjects = () => {
		myProjects.forEach((project) => {
			project.displayProject();
			UI.initializeProj(project.ID);
		});
	};

	const initializeProj = (ID) => {
		// eslint-disable-next-line array-callback-return
		UI.myProjects.find((project) => {
			if (project.ID === ID) {
				UI.resetMain();
				project.displayProjectTasks();
				project.makeActive();
				const myForm = TaskFormFactory(project.ID);
				myForm.buildAddTask();
			}
		});
	};

	return {
		myProjects,
		resetMain,
		firstLoad,
		addProject,
		removeProject,
		loadHomepage,
		displayProjects,
		initializeProj,
	};
})();

export default UI;
