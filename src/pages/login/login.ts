import tmpl from './login.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

