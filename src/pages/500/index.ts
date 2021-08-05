import 'styles/reset.scss';
import 'styles/fonts.scss';
import 'styles/global.scss';
import './500.scss';
import DOMWorker from 'utils/DOMWorker';
import Error500 from './E500';
import {tmpl} from './500.tmpl';

const error500 = new Error500(tmpl);
DOMWorker.append('#root', error500.getContent());









