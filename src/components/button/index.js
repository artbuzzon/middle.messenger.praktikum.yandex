import {tmpl} from './button.tmpl';
import Hogan from '../../../node_modules/hogan.js/lib/hogan';
import chatStyle from './button.scss';

const t = Hogan.compile(tmpl);
const o = t.render({foo: 'Mike!'});

export {o};
