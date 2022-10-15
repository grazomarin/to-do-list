import './index.scss';
import checkImgSrc from './images/icons/check.svg'
import closeImgSrc from './images/icons/close.svg'
import arrowDownImgSrc from './images/icons/arrow-down.svg'

import UI from './modules/_ui'
import ProjectFactory from './modules/_project'
import TaskFactory from './modules/_task'
import TaskFormFactory from './modules/_task-form'
import navFormFactory from './modules/_nav-form'

const main = document.querySelector('.container-main')
const nav = document.querySelector('.container-nav')

const navForm = navFormFactory()
navForm.buildNav()
UI.initProject()

export { main, nav }




