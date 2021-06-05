import 'styles/reset.scss';
import 'styles/fonts.scss';
import 'styles/global.scss';
import './404.scss';
import DOMWorker from 'utils/DOMWorker';
import Error404 from './404';
import {tmpl} from './404.tmpl';

const error404 = new Error404(tmpl);
DOMWorker.append('#root', error404.getContent());





