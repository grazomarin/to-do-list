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
		addTask: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === state.activeFolderId
			);
			folder.tasks.push({
				...action.payload,
				isCompleted: false,
				id: uniqid(),
			});
		},
		editTask: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === state.activeFolderId
			);
			const task = folder.tasks.find((task) => task.id === action.payload.id);
			task.title = action.payload.title;
			task.priorityColor = action.payload.priorityColor;
			task.description = action.payload.description;
			task.dueDateString = action.payload.dueDateString;
		},
		toggleIsCompleteTask: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === state.activeFolderId
			);
			const task = folder.tasks.find((task) => task.id === action.payload.id);
			task.isCompleted = !task.isCompleted;
		},
		deleteTask: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === state.activeFolderId
			);
			folder.tasks = folder.tasks.filter(
				(task) => task.id !== action.payload.id
			);
		},
		duplicateTask: (state, action) => {
			const folder = state.folders.find(
				(folder) => folder.id === state.activeFolderId
			);
			const task = folder.tasks.find((task) => task.id === action.payload.id);
			folder.tasks.push({ ...task, id: uniqid() });
		},
	},
});

// TODO add transfer Folders feature

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
	toggleIsCompleteTask,
	deleteTask,
	duplicateTask,
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
