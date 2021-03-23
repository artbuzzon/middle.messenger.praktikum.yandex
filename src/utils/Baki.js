/*
* Curly templator for real web-monkeys
* */

window.Templator = (function () {
  function _compileTemplate(template, ctx) {
    let tmpl = this._template;
    let key = null;
    const regExp = this.TEMPLATE_REGEXP;

    // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        // get — функция, написанная ранее в уроке
        const data = window.get(ctx, tmplValue);
        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }

    return tmpl;
  }

  class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    constructor(template) {
      this._template = template;
    }

    compile(ctx) {
      return _compileTemplate(this._tempaltectx);
    }
  }

  // Можно не только из window брать, но и присвоить экспорту файла
  return Template;
})();

function get(obj, path, defaultValue) {
  const keys = path.split('.');

  let result = obj;
  for (let key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue; // "??" — [оператор нулевого слияния](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) (не поддерживается старыми браузерами, для них нужен полифилл)
}
