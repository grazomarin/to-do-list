# To Do List

## Built With

- React
- Sass
- Vite

## About

This is a feature-packed interactive To-Do App. What's so special about it? Let me list all the features of the app that would answer your question:
We've got three main components in this app. Tasks, Sections, and Folders. You can create as many folders as you want, which can hold Sections and Tasks. Each Section is sort of a sub-folder to group your tasks, and tasks are just tasks, lol
### 1. Features for Tasks
  * Create tasks (duh)
  * Add task title
  * Add task details
  * Add task due date
  * Add task priority (changes the appearance of the task)
  * Check off tasks
  * Duplicate tasks
  * Edit tasks after creating them
  * Delete Tasks
### 2. Features for Sections
  * Create sections
  * Add a section title
  * Fold sections
  * Edit sections
  * __Move sections to other folders__ (really proud of this one)
  * Delete sections
### 3. Features for Folders
  * Create folders
  * Add folder title
  * Change folder color (changes the appearance of the folder)
  * Edit folder
  * Duplicate folder
  * Make folder favorite (separates favorite folder from the rest)
  * Folder shows number of total tasks and number of tasks completed
### Quality of Life Features
  * Light and Dark themes (you may have either a light or dark theme at startup; that's because I wrote the code in a way that it assigns a theme according to your browser preference)

### For Nerds
For the front end, basic React is used, no type checking for now, and for the storage, I am using React Context (yikes). I am aware that is not the ideal way to store the data, but the app is small, so it shouldn't be a big performance issue. However, I am still going to implement Redux in the near future.

### Future Plans
* Implement Redux
* Implement TypeScript
* Add email notifications as task reminders (far future)


### ===> [Live Demo](https://grazomarin.github.io/to-do-list/) <===
