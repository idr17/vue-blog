<template>
  <header>
  	<h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
	  // title above is override / served by props rather than title in the data itself.
	props: {
		title: {
			type: String
		}
	},
	data () {
		return {
	      title: 'My spirit never ends'
		}
  	},
  	methods: {
  		/*
  		// function here just effect in local components.
  		changeTitle: function () {
  			this.title = 'My Spirit Never Ends!.'
  		}
  		*/
  		// This funtion effects to global / parents.
  		changeTitle: function () {
  			//this.$emit('changeTitle', 'New Title') // event parent change variables.  
  			this.title = 'Vue Wizard'
  			bus.$emit('titleChanged', 'Vue wizard');
  		}
  	}
}
</script>

<style scoped>
header{
	background-color: lightgreen;
	padding: 10px;
	margin: 0 auto;
	text-align: center;
}
h3{
	color: #222;
}
</style>
