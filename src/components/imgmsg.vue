<template>
  <div class="imgmsg thumbnail">
    <div class="comment text-center">
      <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
      <span class="fa fa-commenting fa-lg"></span>
    </div>
    <img src="imgsrc" alt="Customer Photo1">
    <div class="caption">
      <blockquote class="description"><p>{{description}}</p></blockquote>
      <p class="reviewer">用户名</p>
    </div><!-- /.caption -->
  </div><!-- /.hreview -->
</template>

<script >
export default {
  name: 'imgmsg',
  props:['imgsrc','description'],
  data () {
      return {
      }
    }
}

</script>

<style >
.imgmsg{
    position: relative;
    padding: 0px;
    border: none;
}
.imgmsg .comment{
    display: none;
}
.imgmsg:hover .comment{
    display: block;
    position: absolute;
    background-color:rgba(0,0,0,0.6);
    top:0px;
    left:10px;
    right: 10px;
    padding:10px;
    color: #fff;
}
.imgmsg .caption{
    position: absolute;
    top: auto;
    left: 10px;
    right: 10px;
    bottom: 0;
    line-height: 1.1;
    background: rgba(0,0,0,0.5);
}
.imgmsg blockquote,.reviewer {
      margin: 0 6px;
      padding: 0;
}
.imgmsg blockquote {
      margin-top: 4px;
      border: none;
}
p{
  color: #fff;
  font-size: 14px;
}
.imgmsg .reviewer{
    margin-top: 2px;
    margin-bottom: 4px;
    text-align: right;
    color: #fff;
}
</style>
