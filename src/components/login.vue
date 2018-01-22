<template>
  <div class="login">
     <div class="login_wrapper">
          <div class="animate form login_form">
            <section class="login_content">
              <form>
                <h1>管理员登录</h1>
                <div>
                  <input type="text" class="form-control" placeholder="管理员登录名" required  v-model="uname"/>
                </div>
                <div>
                  <input type="password" class="form-control" placeholder="管理员登录密码" required  v-model="upwd"/>
                </div>
                <div>
                  <a class="btn btn-default submit" @click="loginToIndex">&nbsp;登&nbsp;录&nbsp;</a>

                </div>

                <div class="clearfix"></div>

                <div class="separator">
                <div class="clearfix"></div>
                <br />
                  <div>
                    <h1><img src="assets/img/favicon.ico" /></i> 萌肉肉商城后台管理系统</h1>
                    <p>©2017 版权所有，CODEBOY.COM</p>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return {
        msg:'Hello Login',
	uname:"",  //绑定用户名
	upwd:""   //绑定密码
      }
    },
    methods:{
	loginToIndex:function(){
	    var n=this.uname;	
	    var p=this.upwd;	
	    var url="http://127.0.0.1/12-html5/admin/data/01_login.php";
	    url+=`?uname=${n}&upwd=${p}`;
            this.$http.get(url).then(function (data) {
                console.log(data);
		if(data.body.code>0){
		   this.$router.push("/list");
		}else{
		   alert(data.body.msg);
		}
            },function(err){
		console.log(err);
	    });
	}
    }
  }
</script>

<style></style>
