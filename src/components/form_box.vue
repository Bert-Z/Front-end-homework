<template>
  <div class="form row">
    <div class="reviews js-masonry" >
      <div class="col-sm-6 col-md-4">
        <div class="item">
          <div class="caption">
            <blockquote class="description"><p> Click or drag files here to upload!</p></blockquote>
            <span class="icon fa fa-5x fa-camera"></span>
            <input type="text" class="form-control" placeholder="What do you want to share today?">
        </div><!-- /.hreview -->
      </div>
      </div>
    </div><!-- /.reviews -->
  </div>
</template>

<script >
  export default {
    name: 'form',
    data () {
      return {
      }
    }
  }

</script>

<style >
  .form .reviews .col-md-4 .item{
    position: absolute;
    padding: 100px;
    border: none;
  }
  .form .reviews .col-md-4 .item .caption {
    border-radius: 10px;
    position: relative;
    margin-top: 20px;
    width: 400px;
    left: 10px;
    right: 10px;
    bottom: 0;
    line-height: 1.1;
    background: rgba(99, 74, 80, 0.21);
    border: none;
  }

  .form .reviews .col-md-4 .item blockquote {
    margin-top: 4px;
    border: none;
  }
  .form .reviews .col-md-4 .item p{
    color: #dd0000;
    font-size: 14px;
    border: none;
  }

  .form .reviews .col-md-4 .item span {
    margin-left: 150px;
    margin-top: 20px;
    margin-bottom: 40px;
    border: none;
    color: #dd0000;
  }
  .form .reviews .col-md-4 .item input{
    border-radius: 10px;
    padding: 10px;
    width: 400px;
    height: 200px;
    color: #dd0000;
    text-shadow: 0px 0px 0px #495057;
    -webkit-text-fill-color: transparent;

  }



</style>


