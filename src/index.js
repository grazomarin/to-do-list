import './index.scss';
import UI from './modules/_ui';

const main = document.querySelector('.container-main');
const nav = document.querySelector('.container-nav');

document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.projects) {
		UI.loadHomepage();
	} else {
		UI.firstLoad();
	}
});

export { main, nav };
