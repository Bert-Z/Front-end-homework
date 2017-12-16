<template>
  <div class="jumbotron" id="user_page">
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
                <h4><a class="btn btn-info"><span class="glyphicon glyphicon-edit"></span>编辑</a>
                </h4>
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
#user_page{
	height: 320px;
	position: relative;
}

</style>
