export default class DOMWorker {

  static getEl(id) {
    const el = document.querySelector(id);
    if (el) {
      return el;
    } else {
      throw new Error(`There is no element with the id ${id} in the DOM`);
    }
  }

  static createEl(el) {
    return document.createElement(el)
  }

  static getEls(ids) {
    return ids.map(id => {
     return DOMWorker.getEl(id)
    })
  }

}
