import EventBus from './EventBus';
import DOMWorker from './DOMWorker';

interface Options {
    [key: string]: any,
}

interface MetaData {
    tagName: string,
    props: Options
}

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    props: Options;
    eventBus: any;
    _element: HTMLElement;
    _tmpl: string;
    _meta: MetaData;

    constructor(tagName = 'div', tmpl: string, props: Options = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props: props
        };

        this._tmpl = tmpl;

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources(): void {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init(): void {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.componentDidMount(this.props);
    }

    // eslint-disable-next-line
    componentDidMount(_oldProps: Options) {
        console.log(_oldProps);
    }

    _componentDidUpdate(oldProps: Options, newProps: Options): void {
        this.componentDidUpdate(oldProps, newProps);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // eslint-disable-next-line
    componentDidUpdate(_oldProps: Options, _newProps: Options) {
        console.log(_oldProps, _newProps);
        return true;
    }

    _componentUpdate(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // eslint-disable-next-line
    componentUpdate() {}

    setProps = (nextProps: Options): void => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement {
        return this._element;
    }

    get tmpl(): string {
        return this._tmpl;
    }

    _render(): void {
        const node = this.render();
        // @ts-ignore
        this._element.append(node);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render() {}

    getContent(): HTMLElement {
        return this.element;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    _makePropsProxy(props: Options) {

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return new Proxy(props, {
            set(target: Options, p: string, value) {
                if (p.indexOf('_') === 0) {
                    throw new Error('Нет прав');
                } else {
                    target[p] = value;
                    self.eventBus().emit(Block.EVENTS.FLOW_CDU, target, this.props);
                }
                return true;
            },
            get(target: Options, prop: string) {
                if (prop.indexOf('_') === 0) {
                    throw new Error('Нет прав');
                }
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            deleteProperty() {
                throw new Error('Нет прав');
            }
        });
    }

    _createDocumentElement(tagName: string): HTMLElement {
        return DOMWorker.createEl(tagName);
    }

    show(): void {
        this.element.style.display = 'block';
    }

    hide(): void {
        this.element.style.display = 'none';
    }
}

export default Block;
