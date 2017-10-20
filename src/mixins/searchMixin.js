export default {
	// Search filter
	computed: {
		filteredArticles: function () {
			return this.articles.filter( (article) => {
				return article.title.match(this.search);
			});
		}
	}
}