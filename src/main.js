import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
Vue.use(axios)

createApp(App).mount('#app')
