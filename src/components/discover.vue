<template>
  <div id="discover" class="container wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.4s">
    <div class="tab" role="tabpanel"> 
        <!-- Nav tabs --> 
        <ul class="nav nav-tabs" role="tablist"> 
            <li role="presentation" class="active"><a href="#food"  role="tab" data-toggle="tab"><span class="icon fa fa-2x fa-spoon"></span></a></li> 
            <li role="presentation"><a href="#movie" role="tab" data-toggle="tab"><span class="icon fa fa-2x fa-caret-square-o-right"></span></a></li> 
            <li role="presentation"><a href="#animal" role="tab" data-toggle="tab"><span class="icon fa fa-2x fa-github"></span></a></li> 
            <li role="presentation"><a href="#landscape" role="tab" data-toggle="tab"><span class="icon fa fa-2x fa-photo"></span></a></li> 
            <li role="presentation"><a href="#book" role="tab" data-toggle="tab"><span class="icon fa fa-2x fa-book"></span></a></li> 
            <li role="presentation"><a href="#other" role="tab" data-toggle="tab"><span class="icon fa fa-2x fa-navicon"></span></a></li> 
            <div class="select">
              <div class="select-item  text-center">
                <select id="way" data-live-search="true">  
                  <option>按照时间顺序</option>  
                  <option>好友优先</option> 
                  <option>按照点赞数量</option>  
                  <option>按照评论数量</option>  
                </select> 
              </div>
              <div class="select-item  text-center">
                <select id="province" data-live-search="true">  
                  <option>上海</option>  
                  <option>河北</option>
                  <option>北京</option>
                  <option>湖北</option>
                  <option>湖南</option>
                  <option>江苏</option>
                  <option>广东</option>
                  <option>河南</option>
                </select>
              </div>
              <div class="select-item  text-center">
                <select id="city" data-live-search="true">
                  <option>上海</option>
                </select> 
              </div>
            </div>
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
      <div class="row pagination-wrap">
        <ul class="pagination">
          <li><a href="#"><span class="fa fa-chevron-left"></span></a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">..</a></li>
          <li><a href="#"><span class="fa fa-chevron-right"></span></a></li>
        </ul>
      </div><!-- /.row.pagination-wrap -->
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
  padding:30px;
  background-color: #D2B48C;
}
.tab .nav-tabs{
  padding-left: 20px;
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
  background: linear-gradient(170deg, transparent 29%, #908a78 30%);
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  margin-right: 0;
  border-radius: 0;
  border: none;
  position: relative;
  padding:20px 50px 20px 50px;
  transition: all 0.5s ease 0s;
} 
.tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  background: linear-gradient(170deg, transparent 29%, #EECFA1 30%);
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
  position: relative;
  color: #6f6c6c;
  line-height: 26px;
  background: #EECFA1;
  padding: 20px;
} 
#discover .select{
  margin: 20px;
}
#discover .select .select-item select{
   float: left;
   padding: 5px;
   margin-left: 40px;
   font-size: 16px;
   background: #D2B48C;
   border:none;
   color: #6f6c6c;
   font-family: "Microsoft YaHei";
   outline: none;
}
#discover .page .pagination-wrap .pagination li a{
  margin: 5px;
  color: #545454;
  border-radius: 50%;
  border:none;
  background-color: #EECFA1;
}
</style>