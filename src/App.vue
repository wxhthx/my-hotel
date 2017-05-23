<template lang="jade">
  div#app
    //- router-view
    div.container
      app-header
      div.turn_left.iconfont
        a(@click="onSwiperight")
      div.turn_right.iconfont
        a(@click="onSwipeLeft")
      v-touch.hotel_content(v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwiperight")
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
    onSwiperight: function () {
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

/**
* 引入css基础框架bootstrap和自定义css基础框架
*/
@import './assets/styles/plugins/bootstrap/bootstrap.scss';
@import './assets/styles/custommade/main.scss';
</style>

<style lang="scss" scoped>
$hori-offset: -1em;

%div_turn {
  position: absolute;
  top: 50%;
}

%div_turn_pseudo {
  width: 20px;
  height: 20px;
}

.hotel_content {
  margin-top: 30px;
}

.turn_left {  
  @extend %div_turn;
  left: $hori-offset;
  a {
    @extend %div_turn_pseudo;
    &:before{
      content: "\e628";
    }
  }
}

.turn_right {
  @extend %div_turn;
  right: $hori-offset;
  a {
    @extend %div_turn_pseudo;
    &:after{
      content: "\e642";
    }
  } 
}
</style>
