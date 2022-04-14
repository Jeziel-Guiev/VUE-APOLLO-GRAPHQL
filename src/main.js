import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import '@/firebase/firebaseConfig'
import '@/libs/acl'
import VueCryptojs from 'vue-cryptojs'
import { createProvider } from './vue-apollo'


Vue.use(VueCryptojs)
//  Vue.use(Toasted)
Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:3010'//'http://143.198.174.218:3010'//'http://localhost:3010' //'http://143.198.174.218:3010'
new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
//https://www.figma.com/file/rs9aKeITcVvBlgKqvhYvJu/Untitled?node-id=25%3A3