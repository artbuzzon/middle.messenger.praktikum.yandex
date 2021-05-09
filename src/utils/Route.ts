import {isEqual} from './utils';
import Block from './Block';
import ComponentRegistry from './ComponentRegistry';

interface Options {
    [key: string]: any,
}

export default class Route {
    _pathname: string;
    _props: Options;
    _blockClass: Block;
    _block: Block | null;

    constructor(pathname: string, view: Block, props: Options) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }

    render(): void {
        if (!this._block) {
            // @ts-ignore
            this._block = new this._blockClass();
            const componentRegistry = new ComponentRegistry();
            componentRegistry.renderRoot('#root', this._block?.getContent());
        }
    }
}
