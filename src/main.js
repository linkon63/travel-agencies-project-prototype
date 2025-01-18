
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import 'vue-glide-js/dist/vue-glide.css';
import App from './App.vue';
import './assets/main.css';
import router from './router';
const app = createApp(App)
library.add(fas,fab);

import './assets/main.css';
app.use(router)
// app.use(PrimeVue)
app.use(PrimeVue,{
  theme:{
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
  }
  }
})
// app.use(VueGlide)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

// import './assets/main.css'
// import 'primeicons/primeicons.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')