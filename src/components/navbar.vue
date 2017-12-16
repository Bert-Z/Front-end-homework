<template>
	<nav role="navigation" class="navbar navbar-default navbar-fixed-top">
	    <div class="container">
	      <div class="navbar-header">
	        <a class="navbar-brand" href="index.html"><em><strong>Discover</strong></em></a>
	      </div>
			<form class="navbar-form navbar-left" role="search">
			  <div class="form-group">
			    <input type="text" class="form-control" placeholder="搜索 Discover">
			  </div>
				<button type="button" class="btn btn-default" aria-label="Left Align">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				</button>
			</form>
	      <div class="navbar-collapse collapse">
	        <ul class="nav navbar-nav navbar-right">
	          <li class="active">
				<a href="#welcome"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
	          <li>
				<a href="#discover"><span class="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span></a></li>
	          <li>
				<a href="#share"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></li>
			  <li>
				<a href="#user"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a></li>
	          <li>
				<a href="#about"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span></a></li>
	        </ul>
	      </div><!--/.nav-collapse -->
	    </div><!--/.container -->
     </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar .container .navbar-collapse ul li{
	padding-right: 50px;
}
button :focus{
	outline: none;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 ;
}
a {
  color: #42b983;
}
</style>
