class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }

    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  get data() {
    return this.$el.dataset
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb)
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}) {
    // if (!Object.keys(styles).length) {
    //   return;
    // }
    // for (const stylesKey in styles) {
    //   if (styles[stylesKey] !== undefined) {
    //     this.$el.style[stylesKey] = styles[stylesKey]
    //   }
    // }

    Object.keys(styles).forEach((key) => {
      this.$el.style[key] = styles[key]
    })
  }
}


export function $(selector) {
  return new Dom(selector)
}

$.create = (name, classes = '') => {
  const el = document.createElement(name);
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
