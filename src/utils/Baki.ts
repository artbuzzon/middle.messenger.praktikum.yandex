/*
* Curly templator for real web-monkeys
* */

import DOMWorker from "./DOMWorker";

export default class Baki {
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    _template: string;

    constructor(template: string) {
        this._template = template;
    }

    compileTemplate(ctx: Options) {
        let tmpl = this._template;
        let key = null;
        const regExp = this.TEMPLATE_REGEXP;

        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
                const tmplValue = key[1].trim();
                const data = this.getValue(ctx, tmplValue);
                tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
            }
        }

        return this.getDomNode(tmpl);
    }

    getDomNode(tmpl: string): HTMLElement {
        const template = DOMWorker.createEl('template') as HTMLTemplateElement;
        tmpl = tmpl.trim();
        template.innerHTML = tmpl;
        return <HTMLElement>template.content.firstChild;
    }

    getValue(obj: Options, path: string, defaultValue = ''): string {
        const keys = path.split('.');

        let result = obj;
        for (let key of keys) {
            result = result[key];

            if (result === undefined) {
                return defaultValue;
            }
        }

        return String(result) ?? defaultValue;
    }
}
