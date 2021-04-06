import tmpl from './500.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

