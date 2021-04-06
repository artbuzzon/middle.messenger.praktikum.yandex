import tmpl from './signin.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

