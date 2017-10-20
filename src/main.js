import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

// Event bus. emit event from child to child. not to parent like emit event commonly before.
//export const bus = new Vue();

/*
// Global Custom directives
Vue.directive('rainbow', {
	bind (el, bind, vnode) { // vue life cycle hooks. fired when bind.
		el.style.color = '#' + Math.random().toString().slice(2, 8);
	}
});

Vue.directive('width', {
	bind (el, bind, vnode) { // vue life cycle hooks. fired when bind. use of binding value and arguments.
		// bind value
		if (bind.value == 'wide') {
			el.style.maxWidth = '1200px';
		} else if (bind.value == 'narrow') {
			el.style.maxWidth = '480px';
		}

		// bind argument
		if (bind.arg == 'dark') {
			el.style.background = '#ccc';
			el.style.padding = '20px;';
		} else if (bind.arg == 'cool') {
			el.style.background = '#f90';
			el.style.padding = '20px;';
		}
	}
});

// Global Filters
Vue.filter('to-uppercase', function (val) {
	return val.toUpperCase();
});
*/

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
