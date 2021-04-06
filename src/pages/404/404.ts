import tmpl from './404.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

