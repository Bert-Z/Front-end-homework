<template>
<div id="user_page">
  <div class="container">
    <div class="row">
      <div class="col-md-11 col-md-offset-1">
        <div class="row" id="user_message1">
          <div class="col-md-2 col-xs-12">
            <a class="thumbnail" href="#">
              <img width="180" height="171" alt="" src="../assets/user/icon3.jpg">
            </a>
          </div>
          <div class="col-md-7 col-xs-12">
            <h4>&nbsp;&nbsp;&nbsp;</h4>
            <h3>UserName&nbsp;&nbsp;&nbsp;</h3>
            <form class="form-horizontal">
              <div class="form-group">
                <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
                <label>SJTU&nbsp;&nbsp;</label>
                <label>|&nbsp;&nbsp;&nbsp;性别:&nbsp;  <span class="fa fa-mars" aria-hidden="true"></span></label>
              </div>
              <div class="form-group">
                <label>一句话介绍:&nbsp;&nbsp;  </label>
                <input type="text"  size='50'  style="background:transparent; border:none;" >
              </div>
            </form>
          </div>
          <div class="col-md-offset-2 col-md-1" >
            <h4>&nbsp;&nbsp;&nbsp;</h4>
            <h4>&nbsp;&nbsp;&nbsp;</h4>
            <h4>&nbsp;&nbsp;&nbsp;</h4>
            <button class="btn btn-success" ><span class="fa fa-edit fa-lg " aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
    </div>
      <div class="row">
      <div class="col-md-7 col-md-offset-1" id="user_message2">
        <div class="user-content"  >
            <div class="tab" role="tabpanel">
              <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">好友动态</a></li>
                  <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">我的回答</a></li>
                  <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">我的提问</a></li>
                  <li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">我的关注</a></li>
                  <li role="presentation"><a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab">好友信息</a></li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content tabs">
                  <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                      <h3>动态</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section2">
                      <h3>回答</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section3">
                      <h3>提问</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section4">
                      <h3>关注</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section5">
                      <h3>好友</h3>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-md-4" id="user_message3">
        <div class="page-header"><strong>消息框</strong></div>
        <div class="user row">
        <ul>
          <li><h5>智能玩咖 回答了 江苏有哪些鲜有人知的特色景点？</h5></li>
          <li><h5>智能玩咖 回答了 河南有哪些鲜有人知的特色小吃？</h5></li>
          <li><h5>智能玩咖 回答了 上海有哪些好吃的日料店？</h5></li>
        </ul>
      </div>
        <div class="page-header"><strong>个人成就</strong></div>
          <h4><span class="fa fa-pencil-square" aria-hidden="true"></span>&nbsp;参与了x次公共编辑</h4>
          <h4><span class="fa fa-star" aria-hidden="true"></span>&nbsp;被x名用户关注</h4>
          <div class="page-header"><strong>我的关注</strong></div>
              <table class="table">
                <tr>
                  <td>关注的话题</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>关注的收藏夹</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>关注的用户</td>
                  <td>98</td>
                </tr>
              </table>
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
#user_message1,#user_message2,#user_message3{
  background:#fff;
}
#user_page,#user_page .jumbotron{
  background: #f3f3f3;
}
#user_page .form-group{
  margin: 5px;
}
#user_page .container{
  padding:auto auto auto 0;
  margin:auto auto auto 0;
}
.panel{
  background-color:#EECFA1;
}
#user_info{
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
  background: linear-gradient(165deg, transparent 29%, #2C3E50 30%);
  font-size: 15px;
  font-weight: 600;
  color:#fff;
  text-transform: uppercase;
  margin-right: 0;
  border-radius: 0;
  border: none;
  position: relative;
  transition: all 0.5s ease 0s;
}
.tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  background: linear-gradient(165deg, transparent 29%, #3498DB 30%);
  border: none;
  color: #2C3E50;
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
  background: repeating-linear-gradient(120deg, #19B5FE, #DADFE1);
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
