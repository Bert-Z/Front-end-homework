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
	      <div class="tab" role="tabpanel">
	        <!-- Nav tabs -->
	        <ul class="nav nav-tabs" role="tablist">
	            <li role="presentation" class="active"><a href="#theme"  role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-fire"></span> 主题</a></li>
	            <li role="presentation"><a href="#explore"  role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-users"></span> 探索</a></li>
	        </ul>
	        <!-- Tab panes -->
	        <div class="tab-content tabs">
	            <div role="tabpanel" class="tab-pane fade in active" id="theme">
			      <div class="types row">
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme2.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>我的大学</h4><p>你的大学，每天都在发生什么？</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme1.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>同龄人</h4><p>和你一样大的人，每天都做些什么？</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/landscape8.jpeg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>我的附近</h4><p>你的身边，每天都在发生什么？</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme3.jpeg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>我的家乡</h4><p>你的家乡，又发生了什么变化？</p></div>
			      </div>
			      <div class="types row">
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/food8.jpeg"></a><a class="follow btn"><span class="fa fa-plus fa-lg"></span></a><h4>美食</h4><p>附近又开了哪家新店</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/animal8.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>萌宠</h4><p>发现你身边有多少喵星人</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/landscape8.jpeg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>风景</h4><p>有那些风景你未曾注意</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/movie8.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>电影</h4><p>在这里邂逅一段影像</p></div>
			      </div>
			      <div class="types row">
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme4.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>书籍</h4><p>在这里寻找一本书</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme5.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>失物招领</h4><p>丢了东西不妨来这看一看</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme6.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>我的同行</h4><p>你的同行现在都在干什么？</p></div>
			        <div class="type text-center"><a class="thumbnail"><img src="../assets/theme/theme7.jpg"></a><a class="follow btn"><span class="fa fa-paper-plane fa-lg"></span></a><h4>活动</h4><p>附近有什么活动？</p></div>
			      </div>
	            </div>
	            <div role="tabpanel" class="tab-pane fade" id="explore">
	              <div class="image col-md-4">
			      	<a class="thumbnail"><img src="../assets/user/user-21.jpg"></a>
			      	<a class="thumbnail"><img src="../assets/user/user-22.jpg"></a>
			      </div>
			      <div class="image col-md-4">
			      	<a class="thumbnail"><img src="../assets/user/user-24.png"></a>
			      	<a class="thumbnail"><img src="../assets/user/user-25.gif"></a>
			      </div>
			      <div class="image col-md-4">
			      	<a class="thumbnail"><img src="../assets/user/user-23.jpg"></a>
			      	<a class="thumbnail"><img src="../assets/user/user-26.jpeg"></a>
			      </div>
	            </div>
	        </div>
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
#welcome .container .tab .tab-content .tab-pane .types{
	margin-top: 100px;
}
#welcome .container .tab .tab-content .tab-pane .types .type{
  display: inline-block;
  position: relative;
  height:180px;
  width: 210px;
  border-radius: 10px;
  margin-left: 60px;
  border:none;
  background:rgba(100,100,100,0.1);
}
#welcome .container .tab .tab-content .tab-pane .types .type .thumbnail{
  position: absolute;
  padding:0px;
  height:70px;
  width:70px;
  top:-30px;
  left:70px;;
}
#welcome .container .tab .tab-content .tab-pane .types .type p{
	padding-left: 20px;
	padding-right: 20px;
}
#welcome .container .tab .tab-content .tab-pane .types .type h4{
	padding-top: 40px;
}
#welcome .container .tab .tab-content .tab-pane .types .follow{
  position: absolute;
  width: 80px;
  top:130px;
  left:65px;
  border-radius: 20px;
  background: #CD3700;
  color: #fff;
}
#welcome .container .tab .tab-content #explore .thumbnail{
	padding:0px;
}
#welcome .container .tab .nav-tabs{
  padding-left: 20px;
  margin-top: 30px;
  margin-right: 100px;
  margin-bottom: 20px;
  border-bottom:none;
  position: relative;
  color:#B5B5B5;
}
#welcome .container .tab .nav-tabs li{
  text-align: center;
}
#welcome .container .tab .nav-tabs li a{
  display: block;
  outline: none;
  height: 50px;
  line-height: 65px;
  font-size: 15px;
  font-weight: 600;
  color: #B5B5B5;
  text-transform: uppercase;
  margin-right: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #D3D3D3;
  position: relative;
  padding:0px 20px 60px 20px;
  transition: all 0.3s ease 0s;
}
#welcome .container .tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  outline: none;
  color: #6B6B6B;
  background:#FFF;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #6B6B6B;
}
#welcome .container .tab .nav-tabs li:last-child a:before{
  border: none;
}
</style>
