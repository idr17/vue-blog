<template>
  <footer>
  	<p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {
  // title above is override / served by props.
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'Copyright 2017 Some Development.co.id. '
    }
  },
  created (){
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
footer{
	background-color: #222;
	padding: 5px;
	margin: 0 auto;
	text-align: center;
}
p{
	color: lightgreen;
}
</style>
