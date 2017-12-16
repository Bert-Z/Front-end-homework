<template>
	<div class="jumbotron" id="welcome">
		<div class="container">
	        <div class="welcome-message">
	          <h1>你为何而来？</h1>
	          <p>在这里<em>发现</em> 你想看到的每一处景色.<a href="#discover" class="btn btn-lg btn-primary pull-right"> 点击向下，打开发现的世界<span class="icon fa fa-arrow-circle-down"></span></a></p>
	        </div><!-- /.welcome-message -->
	    </div>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome{
	height: 620px;
	background: #191919 url('../../static/img/welcome-background.jpg') center center no-repeat;
	background-size: 100% 100%;
	position: relative;
}
#welcome .container{
	position: relative;
}
#welcome .container .welcome-message {
	background-color: rgba(255,255,255,0.4); // translucent overlay
	position: absolute;
	top: 500px;
	left: 0;
	padding: 50px 100px 100px 50px;
	margin: 100px 400px 0px 0px ;
}
</style>