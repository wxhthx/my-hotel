<template lang="jade">
  div#app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

/**
* 引入css基础框架bootstrap和自定义css基础框架
*/
@import './assets/styles/plugins/bootstrap/bootstrap.scss';
@import './assets/styles/custommade/main.scss';
</style>

