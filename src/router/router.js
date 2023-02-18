
import { createWebHistory, createRouter } from 'vue-router';
import table from '../components/table.vue';
import form from '../components/form.vue'

const routes = [
	{
		path: '/',
		name: 'tablePage',
		component: table,
	},
    {
		path: '/formpage',
		name: 'formPage',
		component: form,
	},

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
