import DOMWorker from "./DOMWorker";

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
                target.replaceWith(child.getContent())
            })

        return component
    }

    renderRoot(root: string, component) {
        DOMWorker.append(root, this.renderComponent(component));
    }
}
