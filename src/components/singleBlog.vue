<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<p>Author: {{ blog.author }}</p>
		<p>Categories: </p>
		<ul>
			<li v-for="category in blog.categories">{{ category }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			id: this.$route.params.id,
			blog: {}
		}
	},
	created () {
		this.$http.get('https://vue-playlist-eb01e.firebaseio.com/posts/' + this.id + '.json').then(function (data) {
			return data.json();
		}).then(function (data) {
			this.blog = data;
		});
	}
}
</script>

<style scoped>
	#single-blog{
	padding: 20px;
	margin: 20px 0px;
	box-sizing: border-box;
	background: #ececec;
}
</style>