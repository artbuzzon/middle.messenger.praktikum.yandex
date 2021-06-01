import {expect} from 'chai';
import Baki from '../src/utils/Baki';

describe('test template engine', () => {
    const baki = new Baki('<div>foo</div>');
    it('returns nested value', () => {
        expect(baki.getValue({foo: {bar: 'foo'}}, 'foo.bar'), 'foo');
    });
});
