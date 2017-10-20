<template>
	<div class="row">
		<div class="col-xs-2 col-md-1 logo"><router-link to="/" exact><img src="/src/assets/img/logo.jpg"></router-link></div>
		<div class="col-xs-8 col-md-10 header"><h3>GO BLOG</h3></div>
		<div class="col-xs-2 col-md-1" id="menu">
			<img src="/src/assets/img/dummy.jpg" onclick="toggleElm()">
		  	<div class="dropdown-content" id="showMenu">
				<router-link to="/" exact><img src="/src/assets/img/icon-item.jpg">Show Blogs</router-link>
				<router-link to="/add" exact><img src="/src/assets/img/icon-item.jpg">Add Blog</router-link>
				<a href="#" onclick="toggleElm()"><img src="/src/assets/img/icon-item.jpg">Close</a>
			</div>
		</div>
	</div>
</template>

<script>

export default {

}

</script>

<style scoped>
	.logo, #menu{
		margin: 0 auto;
		padding: 5px 0;
		background-color: #333;
	}
	.row div{
		text-align: center;
	}
	.header{
		height: 60px;
		max-height: 60px;
		text-align: center;
		color: #fff;
		background-color: #333;
	}
	#menu img{
		border-radius: 30px;
		max-width: 50px;
	}
	.logo img{
		max-width: 50px;
	}
	.dropdown-content {
	    display: none;
	    position: absolute;	
	    background-color: #fff;
	    min-width: 200px;
	    z-index: 1;
	    max-height: 500px;
	    overflow-y: auto;
		overflow-x: hidden;
		margin-top: 5px;
		right: 0;
		padding: 5px 10px;
	}
	.dropdown-content a {
	    color: black;
	    padding: 12px 16px;
	    text-decoration: none;
	    display: block;
	    text-align: left;
	}
	.dropdown-content a:hover {background-color: #f1f1f1}
	.dropdown-content a img{ padding-right: 10px; }
	.dropdown-content a:last-child { border-top: solid 1px #ececec; padding: 12px 16px; }
	.collapse{ display: block; }
	.menuActive{ background-color:#fff !important; }
	
	@media only screen and (max-width: 500px){
		.dropdown-content{
			width: 500px;
		}
	}
	@media only screen and (max-width: 480px){
		.dropdown-content{
			width: 480px;
		}
	}
	@media only screen and (max-width: 432px){
		.dropdown-content{
			width: 432px;
		}
	}
	@media only screen and (max-width: 414px){
		.dropdown-content{
			width: 414px;
		}
	}
	@media only screen and (max-width: 412px){
		.dropdown-content{
			width: 412px;
		}
	}
	@media only screen and (max-width: 400px){
		.dropdown-content{
			width: 400px;
		}
	}
	@media only screen and (max-width: 384px){
		.dropdown-content{
			width: 384px;
		}
	}
	@media only screen and (max-width: 375px){
		.dropdown-content{
			width: 375px;
		}
	}
	@media only screen and (max-width: 360px){
		.dropdown-content{
			width: 360px;
		}
	}
	@media only screen and (max-width: 320px){
		.dropdown-content{
			width: 320px;
		}
	}
</style>