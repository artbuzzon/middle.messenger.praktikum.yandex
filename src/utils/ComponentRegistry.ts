import DOMWorker from './DOMWorker';


interface RegistryEntry {
    [key: string]: any,
}

export default class ComponentRegistry {
    registry: RegistryEntry;
    private static __instance: ComponentRegistry;

    constructor() {
        if (ComponentRegistry.__instance) {
            return ComponentRegistry.__instance;
        }

        this.registry = {};
        ComponentRegistry.__instance = this;
    }

    add(name: string, component: any): ComponentRegistry {
        this.registry[name] = component;
        return this;
    }

    renderComponent(component: any): any {

        const childComponents = component
            .querySelectorAll('[data-component]');

        Array
            .from(childComponents)
            .forEach((target: HTMLElement) => {


                const name = target
                    .dataset
                    .component;
                const child1 = this.registry[name as string];
                const child = new child1();
                if (!child) {
                    return;
                }
                target.append(child.getContent());
            });

        return component;
    }

    renderRoot(root: string, component: any): void {
        DOMWorker.append(root, this.renderComponent(component));
    }
}
