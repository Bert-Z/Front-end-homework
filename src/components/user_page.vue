<template>
<div id="user_page">
  <div class="jumbotron" id="user_info">
    <div class="container">
      <div class="col-md-9 col-xs-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3 col-xs-12">
                <a class="thumbnail" href="#">
                  <img width="180" height="171" alt="" src="../assets/user_one.jpg">
                </a>
              </div>
              <div class="col-md-9 col-xs-12">
                <h4>User&nbsp;&nbsp;&nbsp;</h4>
                <h5><small>ID:&nbsp;&nbsp;</small>*****</h5>
                <h5><small>性别:&nbsp;&nbsp;</small>****</h5>
                <h5><small>一句话介绍:&nbsp;&nbsp;</small>******</h5>
                <h4><a class="btn btn-info"><span class="glyphicon glyphicon-edit"></span> 编辑</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="user-content"> 
    <div class="container"> 
        <div class="row">
            <div class="col-md-10"> 
                <div class="tab" role="tabpanel"> 
                    <!-- Nav tabs --> 
                    <ul class="nav nav-tabs" role="tablist"> 
                        <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">我的图文动态</a></li> 
                        <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">我的好友</a></li> 
                        <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">我的设置</a></li> 
                    </ul> 
                    <!-- Tab panes --> 
                    <div class="tab-content tabs"> 
                        <div role="tabpanel" class="tab-pane fade in active" id="Section1"> 
                            <h3>我的图文动态</h3> 
                            <p>第一个阶段，是做出要求，对宇宙发出指令，让宇宙了解你想要些什么，宇宙就会自动回应你的想法。</p> 
                            <p>这是一个很有意思的过程，就好比把宇宙当成一本货物的目录，你翻着它，然后决定“我要经历这个，我要那种东西，我要跟那种人一起生活”，你就是那个跟宇宙下订单的人。其实就是这样简单。</p> 
                        </div> 
                        <div role="tabpanel" class="tab-pane fade" id="Section2"> 
                            <h3>我的好友</h3> 
                            <p>第二步是信念。你要相信你已经拥有它了。要有一种毫不动摇的信念，就是我的说法，要相信还没有实现的事，“你的愿望就是我的命令”，宇宙就会开始运作安排，从而满足你心中的愿望。</p> 
                            <p>大多数的时候，假如我们要求的事物没有出现在生活中，我们会感到沮丧和失望，我们甚至会开始怀疑，这种怀疑会让人感到心灰意冷。接受这个感觉，然后用坚定的信念代替它：“我知道……我知道……我知道……，它就要实现了。”</p> 
                        </div> 
                        <div role="tabpanel" class="tab-pane fade" id="Section3"> 
                            <h3>我的设置</h3> 
                            <p>第三步，就是这个过程最后一步，接受。开始感觉好极了，想想要是你想要的事物已经出现，那会是什么感觉。</p> 
                            <p>当你感觉好的时候，你就是把自己和你要的事物放在同一个频率上。尝试去做一切你能做的事，帮助自己具有拥有它们的感觉。无论你能做什么，只要去做，就有助于把这些东西吸引过来。</p> 
                        </div> 
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
  name:'user_page',
  date(){

  },
}
</script>

<style scoped>
#user_page,#user_page .jumbotron{
  background-color: #d57d7d;
}
.panel{
  background-color:#efe8d5;
}
#user_info{
	height: 320px;
	position: relative;
}
.user-content{
  padding-bottom: 1.5em ;
  font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
} 
a:hover,a:focus{
  outline: none;
  text-decoration: none;
} 
.tab .nav-tabs{
  position: relative;
  border-bottom: 0 none;
} 
.tab .nav-tabs li{
  text-align: center;
} 
.tab .nav-tabs li a{
  display: block;
  height: 70px;
  line-height: 65px;
  background: linear-gradient(165deg, transparent 29%, #908a78 30%);
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  margin-right: 0;
  border-radius: 0;
  border: none;
  position: relative;
  transition: all 0.5s ease 0s;
} 
.tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  background: linear-gradient(165deg, transparent 29%, #efe8d5 30%);
  border: none;
  color: #908a78;
} 
.tab .nav-tabs li a:before{
  content: "";height: 70px;
  line-height: 90px;
  border-bottom: 70px solid rgba(0, 0, 0, 0.1);
  border-right: 10px solid transparent;
  position: absolute;top: 0;left: 100%;
  z-index: 1;
} 
.tab .nav-tabs li:last-child a:before{
  border: none;
} 
.tab .tab-content{
  height: 400px;
  font-size: 14px;
  color: #6f6c6c;
  line-height: 26px;
  background: #efe8d5;
  padding: 20px;
} 
.tab .tab-content h3{
  font-size: 24px;
  color: #6f6c6c;
  margin-top: 0;
} 
.tab .tab-content p{
  margin-bottom: 0;
  text-align: justify;
  text-indent: 2em;
  color: #6f6c6c;
} 
@media only screen and (max-width: 480px){ 
    .tab .nav-tabs li{width: 33%;margin-bottom: 8px;} 
    .tab .nav-tabs li:last-child{margin-bottom: 0;} 
    .tab .nav-tabs li a:before{border: none;} 
    .tab .nav-tabs li a{font-size: 0.8em;} 
} 
</style>
