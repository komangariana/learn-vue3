import { createApp } from 'vue'
import App from './photo/App.vue'
import { store } from './photo/store.js'
import { router } from './photo/router.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')