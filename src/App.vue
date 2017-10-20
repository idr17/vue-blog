<template>
	<div>
		<header-blog></header-blog>
		<router-view></router-view>
		<footer-blog></footer-blog>
	</div>
</template>

<script>
// components here move using routes
//import addBlog from './components/addBlog.vue';
//import showBlogs from './components/showBlogs.vue';
//import listBlogs from './components/listBlogs.vue';
import headerBlog from './components/headerBlog.vue';
import footerBlog from './components/footerBlog.vue';

export default {
	components: {
		//'add-blog': addBlog,
		//'show-blogs': showBlogs,
		//'list-blogs': listBlogs
		'header-blog': headerBlog,
		'footer-blog': footerBlog
	},
	data () {
		return {

		}
	},
	methods: {

	}
}
</script>

<style>
	
</style>