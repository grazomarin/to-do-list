import { configureStore, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

function loadState() {
	const savedData = JSON.parse(localStorage.getItem('userdata'));
	if (savedData === null) return undefined;
	return savedData;
}

function saveState(state) {
	localStorage.setItem('userdata', JSON.stringify(state));
}

function passInActiveFolder(reducer) {
	return (state, action) => {
		const { activeFolderId } = state;
		const activeFolder = state.folders.find(
			(folder) => folder.id === activeFolderId
		);
		return reducer(state, action, activeFolder);
	};
}

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		activeFolderId: null,
		folders: [
			{
				title: 'Index',
				tasks: [],
				sections: [],
				color: '#f44336',
				favorite: false,
				id: uniqid(),
			},
		],
	},
	reducers: {
		setActiveFolderId: (state, action) => {
			state.activeFolderId = action.payload.id;
		},
		addFolder: (state, action) => {
			state.folders.push({
				title: action.payload.title,
				tasks: [],
				sections: [],
				color: action.payload.color,
				favorite: false,
				id: uniqid(),
			});
		},
		editFolder: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === action.payload.id
			);
			folder.title = action.payload.title;
			folder.color = action.payload.color;
		},
		deleteFolder: (state, action) => {
			state.folders = state.folders.filter(
				(folder) => folder.id !== action.payload.id
			);
		},
		duplicateFolder: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === action.payload.id
			);
			state.folders.push({ ...folder, id: uniqid() });
		},
		removeFolderFromFavorites: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === action.payload.id
			);
			folder.favorite = false;
		},
		addFolderToFavorites: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === action.payload.id
			);
			folder.favorite = true;
		},
		addTask: passInActiveFolder((state, action, activeFolder) => {
			let storage;
			if (action.payload.sectionId) {
				storage = activeFolder.sections.find(
					(section) => section.id === action.payload.sectionId
				);
			} else {
				storage = activeFolder;
			}
			storage.tasks.push({
				title: action.payload.title,
				priorityColor: action.payload.priorityColor,
				description: action.payload.description,
				dueDateString: action.payload.dueDateString,
				isCompleted: false,
				id: uniqid(),
			});
		}),
		editTask: passInActiveFolder((state, action, activeFolder) => {
			let task;
			if (action.payload.sectionId) {
				const section = activeFolder.sections.find(
					(section) => section.id === action.payload.sectionId
				);
				task = section.tasks.find((task) => task.id === action.payload.id);
			} else {
				task = activeFolder.tasks.find((task) => task.id === action.payload.id);
			}
			task.title = action.payload.title;
			task.priorityColor = action.payload.priorityColor;
			task.description = action.payload.description;
			task.dueDateString = action.payload.dueDateString;
		}),
		toggleCompleteTask: passInActiveFolder((state, action, activeFolder) => {
			let task;
			if (action.payload.sectionId) {
				const section = activeFolder.sections.find(
					(section) => section.id === action.payload.sectionId
				);
				task = section.tasks.find((task) => task.id === action.payload.id);
			} else {
				task = activeFolder.tasks.find((task) => task.id === action.payload.id);
			}
			task.isCompleted = !task.isCompleted;
		}),
		deleteTask: passInActiveFolder((state, action, activeFolder) => {
			if (action.payload.sectionId) {
				const section = activeFolder.sections.find(
					(section) => section.id === action.payload.sectionId
				);
				section.tasks = section.tasks.filter(
					(task) => task.id !== action.payload.id
				);
			} else {
				activeFolder.tasks = activeFolder.tasks.filter(
					(task) => task.id !== action.payload.id
				);
			}
		}),
		duplicateTask: passInActiveFolder((state, action, activeFolder) => {
			let task;
			let taskIndex;
			let data;
			if (action.payload.sectionId) {
				const section = activeFolder.sections.find(
					(section) => section.id === action.payload.sectionId
				);
				data = section.tasks;
			} else {
				data = activeFolder.tasks;
			}
			task = data.find((task) => task.id === action.payload.id);
			taskIndex = data.findIndex((task) => task.id === action.payload.id);
			data.splice(taskIndex + 1, 0, { ...task, id: uniqid() });
		}),
		addSection: passInActiveFolder((state, action, activeFolder) => {
			activeFolder.sections.push({
				title: action.payload.title,
				tasks: [],
				folded: false,
				id: uniqid(),
			});
		}),
		editSection: passInActiveFolder((state, action, activeFolder) => {
			const section = activeFolder.sections.find(
				(section) => section.id === action.payload.id
			);
			section.title = action.payload.title;
		}),
		deleteSection: passInActiveFolder((state, action, activeFolder) => {
			activeFolder.sections = activeFolder.sections.filter(
				(section) => section.id !== action.payload.id
			);
		}),
		foldSection: passInActiveFolder((state, action, activeFolder) => {
			const section = activeFolder.sections.find(
				(section) => section.id === action.payload.id
			);
			section.folded = !section.folded;
		}),
		moveSection: passInActiveFolder((state, action, activeFolder) => {
			const section = activeFolder.sections.find(
				(section) => section.id === action.payload.id
			);
			activeFolder.sections = activeFolder.sections.filter(
				(section) => section.id !== action.payload.id
			);
			const newFolder = state.folders.find(
				(folder) => folder.id === action.payload.folderId
			);
			newFolder.sections.push(section);
		}),
	},
});

export const {
	setActiveFolderId,
	addFolder,
	editFolder,
	deleteFolder,
	duplicateFolder,
	removeFolderFromFavorites,
	addFolderToFavorites,
	addTask,
	editTask,
	toggleCompleteTask,
	deleteTask,
	duplicateTask,
	addSection,
	editSection,
	deleteSection,
	foldSection,
	moveSection,
} = todoSlice.actions;

const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
	},
	preloadedState: loadState(),
});

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
