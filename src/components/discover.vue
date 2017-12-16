<template>
  <div id="discover" class="container wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.4s">
    <ul class="category text-center">
      <div class="row">
        <li class="col-md-2 text-center" @click="toggle(tab.type,tab.view)" v-for="tab in tabs" :class="{'active': state == tab.type}"><span class="icon fa fa-2x" :class="tab.icon"></span>
        </li>
      </div>
    </ul>
    <div class="row select">
      <div class="select-item col-md-4 text-center">
        <select id="way" data-live-search="true">  
          <option>按照时间顺序</option>  
          <option>按照点赞数量</option>  
          <option>按照评论数量</option>  
        </select> 
      </div>
      <div class="select-item col-md-4 text-center">
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
      <div class="select-item col-md-4 text-center">
        <select id="city" data-live-search="true">
          <option>上海</option>
        </select> 
      </div>
    </div>
    <component :is="currentView" ></component>
    <div class="page container text-center">
      <div class="row pagination-wrap">
        <ul class="pagination">
          <li><a href="#"><span class="fa fa-chevron-left"></span> Prev</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">..</a></li>
          <li><a href="#">Next <span class="fa fa-chevron-right"></span></a></li>
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
    return {
      currentView:food,
      state:'美食',
      tabs: [
        {
          type: '美食',
          view: 'food',
          icon: 'fa-spoon'
      },
      {
        type: '电影',
        view: 'movie',
        icon: 'fa-caret-square-o-right'
      },
      {
        type: '萌宠',
        view: 'animal',
        icon: 'fa-github'
      },
      {
        type: '风光',
        view: 'landscape',
        icon: 'fa-photo'
      },
      {
        type: '书籍',
        view: 'book',
        icon: 'fa-book'
      },
      {
        type: '动态',
        view: 'other',
        icon: 'fa-navicon'
      },
    ]
    }
  },
  methods: {
    toggle(t,v) {
      setTimeout(function(){

      },500)
      this.state = t;
      this.currentView = v;
  }
  },
  components:{
    food,
    movie,
    animal,
    landscape,
    book,
  }
}
</script>

<style scoped>
#discover .category{
  list-style: none;
  margin-bottom: 20px;
  border-bottom: 1px solid #636363;
}
#discover .category li {
  height: 50px;
  padding:10px;
  background-color:#fff;
  color:#636363; 
}
#discover .category li .icon{
  margin-bottom: 5px;
}
#discover .category li .type{
  font-size: 16px;
}
#discover .category .active{
  padding:10px;
  background-color:#636363;
  color:#fff;
}
#discover .select{
  margin: 20px;
}
#discover .select .select-item select{
   padding: 5px;
   font-size: 16px;
   border: 1px solid #ccc;
   border-radius: 10px;
   background: #545454;
   color: #fff;
   font-family: "Microsoft YaHei";
   outline: none;
}
#discover .page .pagination-wrap .pagination li a{
  margin: 5px;
  color: #545454;
  border-radius: 50%;
}
</style>