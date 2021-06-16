import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

import PrimeVue from 'primevue/config';
// import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);
app.component('Button',Button);
app.component('Card',Card);

// app.component('Dialog', Dialog);

app.mount('#app');
