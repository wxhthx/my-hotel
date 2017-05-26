const plugin = {}
plugin.config = {}
let installed = false
let className = ''
let validation = {}
plugin.install = function (Vue, options) {
    installed = true
    Vue.directive('validate', {
        bind (el, binding, vnode, oldVnode) {
            className = el.className
            el.className += ' dirty'
            validation[binding.arg] = true
        },
        update (el, binding, vnode) {
            let value = el.value
            let result = ''
            if (value) {
            console.log(value)
            el.className = className + ' valid'
            } else {
            el.className = className + ' invalid'
            console.log('invalid')
            }
        }
    })
    Vue.prototype.$validate = function (options) {
        console.log(options.name)
    }
}

// if (typeof exports == "object") {
//   module.exports = plugin
// } else if (typeof define == "function" && define.amd) {
//   define([], function () { return plugin })
// } else if (typeof window !== 'undefined' && window.Vue) {
//   window.plugin = plugin
//   Vue.use(plugin)
// }
export default plugin
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
  if (plugin.installed) {
    plugin.installed = false
  }
}

