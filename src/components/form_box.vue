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
    name: 'form_box',
    data () {
      return {
      }
    }
  }

</script>

<style >
  .form .reviews .col-md-4 .item{
    position: absolute;
    padding: 0px;
    border: none;
  }
  .form .reviews .col-md-4 .item .caption {
    border-radius: 10px;
    position: relative;
    margin-top: 20px;
    width: 380px;
    left: 10px;
    right: 10px;
    bottom: 0;
    line-height: 1.1;
    border:#D3D3D3 solid;
  }

  .form .reviews .col-md-4 .item blockquote {
    margin-top: 4px;
    border: none;
  }
  .form .reviews .col-md-4 .item p{
    color: #D3D3D3;
    font-size: 18px;
    padding-left: 20px;
    border: none;
  }

  .form .reviews .col-md-4 .item span {
    margin-left: 150px;
    margin-top: 10px;
    margin-bottom: 40px;
    border: none;
    color: #dd0000;
  }
  .form .reviews .col-md-4 .item input{
    border-radius: 0px;
    border: none;
    border-top: #D3D3D3 dashed;
    margin: 0px 2px 5px 2px;
    padding: 10px;
    width: 375px;
    height: 170px;
    font-size: 20px;
    text-shadow: 0px 0px 0px #D3D3D3;
    -webkit-text-fill-color: transparent;

  }
 .form .reviews .col-md-4 .item input:focus{
  box-shadow:none;
 }


</style>


