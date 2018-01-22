<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>  
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      msg: '脚手架工具 vue-cli'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
