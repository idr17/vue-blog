<template>
	<div v-width="'width'" id="show-blogs">
		<h1>Blog Articles</h1>
		<input type="text" v-model="search" style="width: 100%" placeholder="search">
		<div v-for="article in filteredArticles" class="single-blog">
			<router-link v-bind:to="'blog/' + article.id"><h3>{{ article.title | toUpperCase }}</h3></router-link>
			<p>{{ article.content }}</p>
		</div>
	</div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
	data () {
		return {
			articles: [],
			search: ''
		}
	},
	methods: {

	},
	created() {
		this.$http.get('https://vue-playlist-eb01e.firebaseio.com/posts.json').then(function(data) {
			return data.json();
		}).then(function (data) {
			var arrayData = [];
			for (let key in data) {
				data[key].id = key;
				arrayData.push(data[key]);
			}

			this.articles = arrayData;
		})
	},
	computed: {

	},
	mixins: [searchMixin], 		// method filter filteredArticles has been used as mixins.
	filters: {
		/*
		// Local filters
		'to-uppercase': function (val) {
			return val.toUpperCase();
		}
		*/
		// or the same thing with that
		toUpperCase (val) {
			return val.toUpperCase();
		}
	},
	directives: {
		// Local 	
		'rainbow': {
			bind (el, bind, vnode) { // vue life cycle hooks. fired when bind.
				el.style.color = '#' + Math.random().toString(16).slice(2, 8);
			}
		},
		'width': {
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
		}
	}
}

</script>

<style scoped>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}
.single-blog{
	padding: 20px;
	margin: 20px 0px;
	box-sizing: border-box;
	background: #ececec;
}
input[type=text] { padding: 10px; margin: 20px 0px 40px 0px; }
</style>