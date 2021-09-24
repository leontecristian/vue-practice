import { createApp } from 'vue';

import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import App from './App.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Textarea', Textarea);
app.component('Calendar', Calendar);

app.mount('#app');
