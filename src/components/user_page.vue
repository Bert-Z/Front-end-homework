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
                <label>学校：SJTU&nbsp;&nbsp;</label>
                <label>|&nbsp;&nbsp;&nbsp;性别:&nbsp;  <span class="fa fa-mars" aria-hidden="true"></span></label>
                <label>|&nbsp;&nbsp;&nbsp;年龄:18&nbsp;</label>
                <label>|&nbsp;&nbsp;&nbsp;职业:学生&nbsp;</label>
                <label>|&nbsp;&nbsp;&nbsp;所在地:上海&nbsp;</label>
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
            <button class="btn btn-danger" ><span class="fa fa-edit fa-lg " aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
    </div>
      <div class="row">
      <div class="col-md-7 col-md-offset-1" id="user_message2">
        <div class="user-content"  >
            <div class="tab" role="tabpanel">
              <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"><span class="fa fa-lg fa-pencil-square"></span></a></li>
                  <li role="presentation"><a href="#Section2" aria-controls="messages" role="tab" data-toggle="tab">我的动态</a></li>
                  <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">我的关注主题</a></li>
                  <li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">好友信息</a></li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content tabs">
                  <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                      <form_box/>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section2">
                      <h3>动态</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section3">
                      <h3>关注主题</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section4">
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
          <h4><span class="fa fa-pencil-square" aria-hidden="true"></span>&nbsp;发布了X次动态</h4>
          <h4><span class="fa fa-star" aria-hidden="true"></span>&nbsp;被x名用户关注</h4>
          <div class="page-header"><strong>我的关注</strong></div>
              <table class="table">
                <tr>
                  <td>关注的主题</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>被多少用户关注</td>
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
import form_box from './form_box.vue'
export default {
  name:'user_page',
  date(){

  },
  components:{form_box},
}
</script>

<style scoped>
#user_message1{
  margin-top: 50px;
  padding-top: 30px;
}
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
.tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  outline: none;
  color: #6B6B6B;
  background:#FFF;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #6B6B6B;
}
.tab .nav-tabs li a:before{
  border: none;
}
.tab .nav-tabs li:last-child a:before{
  border: none;
}
.tab .tab-content{
  height: 420px;
  font-size: 14px;
  color: #6f6c6c;
  line-height: 26px;
  background: #fff;
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
