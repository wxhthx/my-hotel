<template lang="jade">
  div#app
    //- router-view
    div.container
      app-header
      router-view
      app-footer
</template>

<script>
import Header from './components/header/Header'
import Index from './components/index/Index'
import Footer from './components/footer/Footer'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-index': Index,
    'app-footer': Footer
  }
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
@import './assets/styles/plugins/bootstrap/bootstrap.scss';
@import './assets/styles/custommade/main.scss';
</style>
