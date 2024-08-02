import { useState } from 'react';
import Options from './options';
import { CirclePicker } from 'react-color';
import {
	addFolder,
	addFolderToFavorites,
	deleteFolder,
	duplicateFolder,
	editFolder,
	removeFolderFromFavorites,
} from '../storage/storage';
import { useDispatch } from 'react-redux';
import ConfirmationModal from './confrimationModal';
import FormButtons from './formButtons';

export default function Folder({ folder, enableEdit, setActiveFolderId, active }) {
	const dispatch = useDispatch();
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const { id } = folder;

	function returnNumOfTotalTasks() {
		const totalUnsectionedTasks = folder.tasks.length;
		const totalSectionedTasks = folder.sections.reduce((acc, section) => {
			return acc + section.tasks.length;
		}, 0);

		return totalUnsectionedTasks + totalSectionedTasks;
	}

	function returnNumOfCompletedTasks() {
		const completedUnsectionedTasks = folder.tasks.filter((task) => task.isCompleted).length;
		const completedSectionedTasks = folder.sections.reduce((acc, section) => {
			return acc + section.tasks.filter((task) => task.isCompleted).length;
		}, 0);

		return completedUnsectionedTasks + completedSectionedTasks;
	}

	return (
		<div
			className={active ? 'folder__active' : 'folder'}
			onClick={() => {
				if (!active) setActiveFolderId(folder.id);
			}}>
			<div className='bullet' style={{ backgroundColor: folder.color }}></div>
			<span className='folder--title'>{folder.title}</span>
			<div className='folder--tasks-count'>
				{returnNumOfCompletedTasks()}/{returnNumOfTotalTasks()}
			</div>
			<Options>
				<Options.Option text='Edit' handleClick={enableEdit} />
				<Options.Option text='Duplicate' handleClick={() => dispatch(duplicateFolder({ id }))} />
				{folder.favorite ? (
					<Options.Option
						text='Remove from Favorites'
						handleClick={() => dispatch(removeFolderFromFavorites({ id }))}
					/>
				) : (
					<Options.Option
						handleClick={() => dispatch(addFolderToFavorites({ id }))}
						text='Add to Favorites'
					/>
				)}
				<Options.Option text='Delete' handleClick={() => setShowConfirmationModal(true)} />
			</Options>
			{showConfirmationModal && (
				<ConfirmationModal
					title={folder.title}
					handleDelete={() => dispatch(deleteFolder({ id }))}
					handleCancel={() => setShowConfirmationModal(false)}
				/>
			)}
		</div>
	);
}

Folder.Form = function FolderForm({ folder, disableForm }) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(folder?.title || '');
	const [color, setColor] = useState(folder?.color || '#f44336');
	const [showError, setShowError] = useState(false);
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		if (isFormValid()) {
			folder
				? dispatch(editFolder({ id: folder.id, title, color }))
				: dispatch(addFolder({ title, color }));
			disableForm();
		} else {
			throwError();
		}
	}

	function isFormValid() {
		return title.trim() !== '';
	}

	function throwError() {
		setShowError(true);
		setTimeout(() => setShowError(false), 2000);
	}

	return (
		<form action='none'>
			<div className='input'>
				<div className='input-cont'>
					<div className='bullet-cont' onClick={() => setDisplayColorPicker((prev) => !prev)}>
						<div className='bullet' style={{ backgroundColor: color }} />
					</div>
					<input
						type='text'
						name='title'
						value={title}
						onInput={(e) => setTitle(e.target.value)}
						placeholder='Title'
					/>
				</div>

				{displayColorPicker && (
					<CirclePicker
						triangle='hide'
						color={color}
						onChange={(newColor) => setColor(newColor.hex)}
						onChangeComplete={() => setDisplayColorPicker(false)}
					/>
				)}

				<FormButtons handleSubmit={handleSubmit} disableForm={disableForm} data={folder} />
			</div>
			{showError && <div className='error-message'>Enter a valid title!</div>}
		</form>
	);
};
