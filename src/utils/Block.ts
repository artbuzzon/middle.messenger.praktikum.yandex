import EventBus from "./EventBus";
import DOMWorker from "./DOMWorker";

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    props: Options;
    eventBus: Function;
    _element: HTMLElement;
    _tmpl: string;
    _meta: MetaData;

    constructor(tagName: string = "div", tmpl: string, props: Options = {}) {
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

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount(oldProps?: Options) {
        console.log(oldProps)
    }

    _componentDidUpdate(oldProps: Options, newProps: Options) {
        const response = this.componentDidUpdate(oldProps, newProps);
        console.log(response)
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps: Options, newProps: Options) {
        console.log(oldProps, newProps);
        return true;
    }

    setProps = (nextProps: Options) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    get tmpl() {
        return this._tmpl;
    }

    _render() {
        this._element.innerHTML = this.render();
    }

    // Может переопределять пользователь, необязательно трогать
    render() {
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: Options) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            set(props: Options, p: string, value) {
                if (p.indexOf('_') === 0) {
                    throw new Error('Нет прав');
                } else {
                    props[p] = value;
                    self.eventBus().emit(Block.EVENTS.FLOW_CDU);
                }
                return true;
            },
            get(target: Options, prop: string) {
                if (prop.indexOf('_') === 0) {
                    throw new Error('Нет прав');
                }
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            deleteProperty() {
                throw new Error('Нет прав');
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return DOMWorker.createEl(tagName);
    }

    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }
}

export default Block;
