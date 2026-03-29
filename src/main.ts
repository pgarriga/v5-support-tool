import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './css/main.css'
import router from './router'
import App from './App.vue'

// iOS Safari: 100vh includes the URL bar area, causing phantom scroll.
// Measure the real visible viewport height and expose it as --app-height.
function setAppHeight() {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', setAppHeight)
setAppHeight()

const app = createApp(App)
app.use(router)
app.mount('#app')
