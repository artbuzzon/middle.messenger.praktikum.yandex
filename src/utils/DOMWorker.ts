export default class DOMWorker {

    static getEl(id: string): HTMLElement {
        const el = document.querySelector<HTMLElement>(id);
        if (el) {
            return el;
        } else {
            throw new Error(`There is no element with the id ${id} in the DOM`);
        }
    }

    static append(query: string, element: HTMLElement) {
        const root = this.getEl(query);
        root.appendChild(element);
        return root;
    }

    static createEl(el: string): HTMLElement {
        return document.createElement(el)
    }

    static getEls(ids: string[]) {
        return ids.map(id => {
            return DOMWorker.getEl(id)
        })
    }

}
