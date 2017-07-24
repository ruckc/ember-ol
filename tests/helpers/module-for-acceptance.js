import { module } from 'qunit'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

const { resolve } = 'rsvp'

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp()

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments)
      }
    },

    afterEach() {
      let afterEach = options.afterEach && options.afterEach.apply(this, arguments)
      return resolve(afterEach).then(() => destroyApp(this.application))
    }
  })
}
