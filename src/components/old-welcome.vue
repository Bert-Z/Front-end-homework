<template>
	<div id="welcome">
		<div class="container">
		  <div id="homepage-feature" class="carousel slide">
		  	<ol class="carousel-indicators">
                <li data-target="#homepage-feature" data-slide-to="0" class="active"></li>
                <li data-target="#homepage-feature" data-slide-to="1"></li>
                <li data-target="#homepage-feature" data-slide-to="2"></li>
                <li data-target="#homepage-feature" data-slide-to="3"></li>
            </ol>
		    <div class="carousel-inner">
                <div class="item active">
                    <img src="../assets/user/user-24.png">
                </div>
                <div class="item">
                    <img src="../assets/landscape6.jpg" >
                </div>
                <div class="item">
                    <img src="../assets/landscape2.jpg">
                </div>
                <div class="item">
                    <img src="../../static/img/welcome-background.jpg">
                </div>
            </div><!-- /.carousel-inner -->
            <!-- Carousel Controls -->
            <a class="left carousel-control" href="#homepage-feature" data-slide="prev">
                <span class="icon fa fa-chevron-left"></span>
            </a>
            <a class="right carousel-control" href="#homepage-feature" data-slide="next">
                <span class="icon fa fa-chevron-right"></span>
            </a>
	        <div class="welcome-message">
	          <h1>你为何而来？</h1>
	          <p>在这里<em>发现</em> 你想看到的每一处景色.</p>
	        </div><!-- /.welcome-message -->
	      </div>
		  <div class="left-section col-md-9">
		      <div class="page-header"><strong>探索</strong></div>
		      <div class="image col-md-6">
		      	<a class="thumbnail"><img src="../assets/user/user-21.jpg"></a>
		      	<a class="thumbnail"><img src="../assets/user/user-22.jpg"></a>
		      	<a class="thumbnail"><img src="../assets/user/user-23.jpg"></a>
		      </div>
		      <div class="image col-md-6">
		      	<a class="thumbnail"><img src="../assets/user/user-24.png"></a>
		      	<a class="thumbnail"><img src="../assets/user/user-25.gif"></a>
		      	<a class="thumbnail"><img src="../assets/user/user-26.jpeg"></a>
		      </div>
	      </div>
	      <div class="right-section col-md-3">
	      	<div class="page-header"><strong>为你推荐</strong></div>
	      	<div class="user row">
	      		<a class="thumbnail col-md-3"><img src="../assets/user/icon1.jpg"></a>
	      		<div class="col-md-8">
	      			<div class="row"><strong>Username</strong><a class="follow">关注</a></div>
	      			<h6>I am a user.</h6>
      			</div>
	      	</div>
	      	<div class="user row">
	      		<a class="thumbnail col-md-3"><img src="../assets/user/icon2.jpg"></a>
	      		<div class="col-md-8">
	      			<div class="row"><strong>Username</strong><a class="follow">关注</a></div>
	      			<h6>I am a user.</h6>
      			</div>
	      	</div>
	      	<div class="user row">
	      		<a class="thumbnail col-md-3"><img src="../assets/user/icon3.jpg"></a>
	      		<div class="col-md-8">
	      			<div class="row"><strong>Username</strong><a class="follow">关注</a></div>
	      			<h6>I am a user.</h6>
      			</div>
	      	</div>
	      	<div class="page-header"><strong>关键词</strong></div>
	      	<div class="word row text-center">
	      	  <div class="col-md-6"><div class="label label-default">FOOD</div></div>
	      	  <div class="col-md-6"><div class="label label-primary">MOVIES</div></div>
	      	</div>
	      	<div class="word row text-center">
	      	  <div class="col-md-6"><div class="label label-success">ANIMAL</div></div>
	      	  <div class="col-md-6"><div class="label label-info">BOOK</div></div>
	      	</div>
	      	<div class="word row text-center">
	      	  <div class="col-md-6"><div class="label label-warning">LANDSCAPE</div></div>
	      	  <div class="col-md-6"><div class="label label-danger">OTHER</div></div>
	      	</div>
	      </div>
	    </div>
    </div>
</template>

<script>
export default {
  name: 'welcome',
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
	margin-top: 30px;
	background-color: #FFF;
}
#welcome .container .carousel{
	margin-top: 0px;
	overflow: hidden;
	background-size: 100% 100%;
	position: relative;
	height: 300px;
	margin-left: 120px;
	margin-right: 120px ;
	margin-bottom:0px;
}
#welcome .container .carousel .carousel-inner{
	z-index: 100;
}
#welcome .container .carousel .carousel-control{
	z-index: 200;
}
#welcome .container .carousel .carousel-indicators{
	z-index: 300;
}
#welcome .container .carousel .welcome-message {
	z-index: 400;
	position: absolute;
	top:70px;
	left: 120px;
	background: rgba(255,255,255,0.6);
	padding:20px 100px 40px 20px;
	border-radius: 10px;
}
#welcome .container .carousel .welcome-message h1{
	font-size: 46px;
}
#welcome .container .left-section .image a,
#welcome .container .left-section .image a:hover,
#welcome .container .left-section .image a:focus{
	padding:0px;
	outline: none;
}

#welcome .container .user a {
	height: 50px;
	width: 50px;
	padding:0px;
	margin-right:20px;
	margin-left: 20px;
}
#welcome .container .right-section .word{
	margin-top: 10px;
	margin-bottom: 5px;
}
#welcome .container .right-section .label{
	padding:5px 20px 5px 20px;
}
</style>
