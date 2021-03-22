import {NodeCreator} from '../../utils/NodeCreator';
import tmpl from './create-user-modal.tmpl';

new NodeCreator('#root',
    tmpl).createChild().insertToDom();

