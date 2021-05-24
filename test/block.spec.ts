import {assert} from 'chai';
import Block from '../src/utils/Block';
import Baki from '../src/utils/Baki';
import {JSDOM} from 'jsdom';


const {window} = new JSDOM();

global.window = window as unknown as Window & typeof globalThis;
global.document = window.document;


const template = `
    <ul>
        <li>{{name}}</li>
        <li>{{familyStatus}}</li>
        <li>{{profession}}</li>
    </ul>`;


const mockData = {name: 'Bob', familyStatus: 'uncle', profession: 'Hmm... uncle'};


describe('test base block component', () => {
    const block = new Block('div', template, mockData);
    block.render = function () {
        return new Baki(this.tmpl).compileTemplate(this.props);
    };
    block.init();

    it('returns compiled template as an HTML element with props', () => {
        const htmlEl = block.getContent().firstChild;
        // @ts-ignore
        assert.equal(htmlEl.children[0].textContent, 'Bob');
        // @ts-ignore
        assert.equal(htmlEl.children[1].textContent, 'uncle');
        // @ts-ignore
        assert.equal(htmlEl.children[2].textContent, 'Hmm... uncle');
    });

});
