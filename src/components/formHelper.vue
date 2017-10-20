<!-- formHelper as template form components -->
<template> 
	<div>
		<h1>Please fill out our form</h1>
		<div id="form-header">
			<slot name="form-header"></slot>
		</div>
		<div id="form-fields">
			<slot name="form-fields"></slot>
		</div>
		<div id="form-controls">
			<slot name="form-controls"></slot>
		</div>
		<div id="useful-links">
			<ul>
				<li><a href="#">github</a></li>
				<li><a href="#">w3schools</a></li>
				<li><a href="#">documentation</a></li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	components: {

	},
	data() {
		return {

		}
	},
	methods: {

	}
}

</script>