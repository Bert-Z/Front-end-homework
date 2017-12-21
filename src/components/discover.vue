<template>
  <div id="discover" class="container wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.4s">
    <div class="container">
      <div class="types row">
        <div class="type text-center"><a class="thumbnail"><img src="../assets/food8.jpeg"></a><a class="follow btn"><span class="fa fa-plus fa-lg"></span></a><h4>美食</h4><p>唯有美食不可辜负</p></div>
        <div class="type text-center"><a class="thumbnail"><img src="../assets/animal8.jpg"></a><a class="follow btn"><span class="fa fa-plus fa-lg"></span></a><h4>萌宠</h4><p>发现你身边有多少喵星人</p></div>
        <div class="type text-center"><a class="thumbnail"><img src="../assets/landscape8.jpeg"></a><a class="follow btn"><span class="fa fa-plus fa-lg"></span></a><h4>美景</h4><p>生活本无趣，光影挽流年</p></div>
        <div class="type text-center"><a class="thumbnail"><img src="../assets/movie8.jpg"></a><a class="follow btn"><span class="fa fa-plus fa-lg"></span></a><h4>电影</h4><p>走进电影世界，听镜头说故事</p></div>
      </div>
    </div>
    <div class="tab" role="tabpanel">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#landscape"  role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-graduation-cap"></span> 我的大学</a></li>
            <li role="presentation"><a href="#landscape"  role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-users"></span> 我的同行</a></li>
            <li role="presentation"><a href="#animal"  role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-map-marker"></span> 我的附近</a></li>
            <li role="presentation"><a href="#food"  role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-spoon"></span></a></li>
            <li role="presentation"><a href="#movie" role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-caret-square-o-right"></span></a></li>
            <li role="presentation"><a href="#animal" role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-github"></span></a></li>
            <li role="presentation"><a href="#landscape" role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-photo"></span></a></li>
            <li role="presentation"><a href="#book" role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-book"></span></a></li>
            <li role="presentation"><a href="#other" role="tab" data-toggle="tab"><span class="icon fa fa-lg fa-navicon"></span></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content tabs">
            <div role="tabpanel" class="tab-pane fade in active" id="food">
              <food/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="movie">
              <movie/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="animal">
              <animal/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="landscape">
              <landscape/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="book">
              <book/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="other">
              <other/>
            </div>
        </div>
    </div>
    <div class="page container text-center">
      <!-- /.row.pagination-wrap -->
    </div>
  </div>
</template>

<script >
import food from './food.vue'
import movie from './movie.vue'
import animal from './animal.vue'
import landscape from './landscape.vue'
import book from './book.vue'
import other from './other.vue'


export default {
  name: 'discover',
  data () {
  },
  methods: {
  },
  components:{
    food,
    movie,
    animal,
    landscape,
    book,
    other
  }
}
</script>

<style scoped>
#discover{
  width: 100%;
  padding:150px 30px 30px 30px;
  background-color: #FFF;
}
#discover .types .type{
  display: inline-block;
  position: relative;
  height:180px;
  width: 210px;
  border-radius: 10px;
  margin-left: 60px;
  border:none;
  background:rgba(100,100,100,0.1);
}
#discover .types .type .thumbnail{
  position: absolute;
  padding:0px;
  height:70px;
  width:70px;
  top:-30px;
  left:70px;;
}
#discover .types .type p{
  position: absolute;
  padding:0px 40px 0px 40px;
  top:80px;
}
#discover .types .type h4{
  padding-top: 40px;
}
#discover .types .follow{
  position: absolute;
  width: 80px;
  top:130px;
  left:65px;
  border-radius: 20px;
  background: #CD3700;
  color: #fff;
}
#discover h1{
  padding-top: 50px;
  font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
  color:#908a78;
}
.tab .nav-tabs{
  border-bottom:none;
  padding-left: 20px;
  margin-top: 50px;
  margin-right: 100px;
  margin-bottom: 20px;
  position: relative;
  color:#B5B5B5;
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
.tab .nav-tabs li:last-child a:before{
  border: none;
}
.tab .tab-content{
  position: relative;
  color: #2C3E50;
  line-height: 26px;
  background: #fff;
  padding: 20px;
}
</style>
