// this script is called when the VueDevtools panel is activated.

import { initDevTools } from '../../../src/devtools'
import Bridge from '../../../src/bridge'

initDevTools({

  connect (cb) {
      const bridge = new Bridge({
        listen (fn) {
          console.log ("Got a message on listen");
        },
        send (data) {
        }
      });

      // Make sure devtools inits
      cb(bridge)
  },

  onReload (reloadFn) {
  }
})

