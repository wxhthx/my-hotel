<template lang="jade">
  div#app
    //- router-view
    div.container
      app-header
      v-touch.hotel_content(v-on:swipeleft="onSwipeLeft" v-on:swiperight="swiperight")
        router-view
      app-footer
</template>

<script>
import Header from './components/header/Header'
import Index from './components/index/Index'
import Footer from './components/footer/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-index': Index,
    'app-footer': Footer
  },
  computed: mapGetters({
    navbar: 'navbar'
  }),
  methods: {
    onSwipeLeft: function () {
      this.$store.dispatch('addNavbarIndex')
      this.$router.push(this.navbar.initData[this.navbar.index].path)
    },
    swiperight: function () {
      this.$store.dispatch('subNavbarIndex')
      this.$router.push(this.navbar.initData[this.navbar.index].path)
    }
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
.hotel_content {
  margin-top: 30px;
}
@import './assets/styles/plugins/bootstrap/bootstrap.scss';
@import './assets/styles/custommade/main.scss';
</style>
