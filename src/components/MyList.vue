<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>显示用户名</h2>  
    <ul>
	<li v-for="item in names">{{item.name}}</li>
    </ul>
    <button @click="loadData">加载数据</button>
  </div>
</template>

<script>


export default {
  name: 'list',
  data () {
    return {
      msg: '列表',
      names:[{name:1},{name:2},{name:3}]
    }
  },
  methods:{
     loadData:function(){
	var url="http://127.0.0.1/list.php";
            this.$http.get(url).then(function (data) {
		console.log(data);
		console.log(data.body);
                this.names=data.body;
            },function(err){
		console.log(err);
	    });
     }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  font-size:30px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
