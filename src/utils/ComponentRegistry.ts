import DOMWorker from "./DOMWorker";
import Input from "../components/Input/input";
import {tmpl as InputTmpl} from "../components/Input/input.tmpl";
import {ERROR_MSGS, INPUT_TYPES} from "./consts";
import {getUuid} from "./utils";


const fields = [new Input(InputTmpl, {
    label: 'Старый пассворд',
    value: '',
    type: INPUT_TYPES.PASS,
    placeholder: 'password',
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'oldPassword',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Новый пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'newPassword',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Повторите пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'password_repeat',
    errorMessageUuid: getUuid(),
})];

export default class ComponentRegistry {
    registry: RegistryEntry;
    private static __instance: ComponentRegistry;

    constructor() {
        if (ComponentRegistry.__instance) {
            return ComponentRegistry.__instance
        }

        this.registry = {};
        ComponentRegistry.__instance = this;
    }

    add(name: string, component: any) {
        this.registry[name] = component;
        return this;
    }

    renderComponent(component) {

        const childComponents = component
            .querySelectorAll('[data-component]')

        Array
            .from(childComponents)
            .forEach(target => {
                const name = target
                    .dataset
                    .component
                const child1 = this.registry[name]
                const child = new child1()
                if (!child) {
                    return
                }
                target.append(child.getContent())
            })

        return component
    }

    renderRoot(root: string, component) {
        DOMWorker.append(root, this.renderComponent(component));
    }
}
