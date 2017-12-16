<template>
  <div id="discover" class="container wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.4s">
    <ul class="category text-center">
      <div class="row">
        <li class="col-md-2 text-center" @click="toggle(tab.type,tab.view)" v-for="tab in tabs" :class="{'active': state == tab.type}"><span class="icon fa fa-2x" :class="tab.icon"></span><span class="type">  {{tab.type}}</span>
        </li>
      </div>
    </ul>
    <component :is="currentView" ></component>
    <div class="container text-center">
      <div class="row pagination-wrap">
        <ul class="pagination">
          <li><a href="#"><span class="fa fa-chevron-left"></span> Prev</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
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
}
#discover .category li {
  height: 50px;
  padding:10px;
  background-color:#fff;
  color:#009ACD; 
}
#discover .category li .icon{
  margin-bottom: 5px;
}
#discover .category li .type{
  font-size: 16px;
}
#discover .category .active{
  padding:10px;
  background-color:#009ACD;
  color:#fff;
}
</style>