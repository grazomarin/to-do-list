import ProjectFactory from './_project';
import TaskFactory from './_task';
import UI from './_ui';

const storage = (() => {
	const stored = localStorage.projects;

	const loadAll = () => {
		storage.loadProjects();
	};

	const loadProjects = () => {
		JSON.parse(stored).forEach((storedProj) => {
			const project = ProjectFactory(storedProj.title, storedProj.ID);
			storage.loadTasksFromTo(storedProj, project);
			UI.myProjects.push(project);
		});
	};

	const loadTasksFromTo = (storedProj, project) => {
		storedProj.myTasks.forEach((storedTask) => {
			const task = TaskFactory(
				storedTask.title,
				storedTask.body,
				storedTask.completion,
				storedTask.date,
				storedTask.ID,
				project
			);
			project.myTasks.push(task);
		});
	};

	return {
		loadAll,
		loadProjects,
		loadTasksFromTo,
	};
})();

export default storage;
