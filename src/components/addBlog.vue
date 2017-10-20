<template>
	<div id="add-blog">
		<h1>Add Blog Post</h1>
		<form v-if="!submitted">
			<label>Title</label>
			<input type="text" name="title" v-model.lazy="blog.title" required="required">
			<label>Content</label>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="checkboxes">
				<label>Free</label>
				<input type="checkbox" value="free" v-model="blog.categories">
				<label>Science Fiction</label>
				<input type="checkbox" value="scifi" v-model="blog.categories">
				<label>Novel</label>
				<input type="checkbox" value="novel" v-model="blog.categories">
				<label>Programming</label>
				<input type="checkbox" value="programming" v-model="blog.categories">
			</div>
			<label>Author</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{ author }}</option>
			</select>
			<button v-on:click.prevent="post">Add Blog</button>
		</form>
		<div v-if="submitted">
			<h3>Thanks for submitting your blog post</h3>
		</div>
		<h3 style="padding-top: 50px;">Preview</h3>
		<div id="preview">
		<p><b>Title:</b> {{ blog.title }}</p>
		<p><b>Content:</b> </p>
		<p>{{ blog.content }}</p>
		<p><b>Categories</b></p>
		<ul>
			<li v-for="category in blog.categories">{{ category }}</li>
		</ul>
		<p><b>Author:</b> {{ blog.author }}</p>
		</div>
	</div>
</template>

<script>

export default {
	components: {

	},
	data () {
		return {
			blog: {
				title: '',
				content: '',
				categories: [],
				author: ''
			},
			authors: ['Indro allezz', 'anna', 'ita', 'endah'],
			submitted: false
		}
	},
	methods: {
		post: function () {
			this.$http.post('https://vue-playlist-eb01e.firebaseio.com/posts.json', this.blog).then(function(data) {
				console.log(data);
				this.submitted = true;
			})
		}
	}
}
</script>

<style scoped>
#add-blog *{
	box-sizing: border-box;
}
#add-blog{
	margin: 20px auto;
	max-width: 500px;
}
label{
	display: block;
	margin: 20px 0px 10px;
}
input[type="text"], textarea{
	display: block;
	width: 100%;
	padding: 8px;
}
#preview{
	padding: 10px 20px;
	border: 1px solid #ccc;
	margin: 30px 0;
}
h3{
	margin-top: 10px;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
#checkboxes label{
	display: inline-block;
}
</style>