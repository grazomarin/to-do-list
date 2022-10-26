import UI from './_ui';
import ProjectFactory from './_project';
import { nav } from '../index';

const navFormFactory = () => {
	const addProjectLine = document.createElement('div');
	const projectForm = document.createElement('form');
	const title = document.createElement('input');
	const buttons = document.createElement('div');
	const cancel = document.createElement('button');
	const submit = document.createElement('button');

	const buildNav = () => {
		addProjectLine.classList = 'container-nav_addProject';
		projectForm.classList = 'container-nav-projectForm';
		title.classList = 'container-nav-projectForm_title';
		buttons.classList = 'container-nav-projectForm-buttons';
		cancel.classList = 'container-nav-projectForm-buttons_cancel';
		submit.classList = 'container-nav-projectForm-buttons_submit';

		addProjectLine.textContent = 'add project';
		cancel.textContent = 'cancel';
		submit.textContent = 'submit';

		title.setAttribute('placeholder', 'Title');
		cancel.setAttribute('type', 'reset');
		submit.setAttribute('type', 'reset');

		buttons.append(cancel, submit);
		projectForm.append(title, buttons);
		nav.append(addProjectLine, projectForm);
		initEventListeners();
	};

	const initEventListeners = () => {
		addProjectLine.addEventListener('click', () => {
			showAddTask();
		});
		cancel.addEventListener('click', () => {
			hideAddTask();
		});
		submit.addEventListener('click', () => {
			submitProject();
		});
		title.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();
				submit.click();
			} else if (event.key === 'Esc') {
				event.preventDefault();
				cancel.click();
			}
		});
	};

	const submitProject = () => {
		const newProject = ProjectFactory(title.value);
		UI.addProject(newProject);
		UI.resetMain();
		newProject.displayProject();
		UI.initializeProj(newProject.ID);
		hideAddTask();
	};

	const showAddTask = () => {
		addProjectLine.style.display = 'none';
		projectForm.style.display = 'flex';
	};

	const hideAddTask = () => {
		addProjectLine.style.display = 'block';
		projectForm.style.display = 'none';
	};

	return {
		buildNav,
	};
};

export default navFormFactory;
