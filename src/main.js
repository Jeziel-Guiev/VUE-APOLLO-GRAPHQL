import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCryptojs from 'vue-cryptojs'
import { createProvider } from './vue-apollo'


Vue.use(VueCryptojs)
//  Vue.use(Toasted)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
//https://www.figma.com/file/rs9aKeITcVvBlgKqvhYvJu/Untitled?node-id=25%3A3