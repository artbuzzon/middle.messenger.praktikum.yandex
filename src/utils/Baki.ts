/*
* Curly templator for real web-monkeys
* */

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

        return tmpl;
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

        return result.toString() ?? defaultValue;
    }
}
