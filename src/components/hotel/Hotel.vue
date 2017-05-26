<template lang="jade">
  div.container.mobile-container
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
import Header from '../header/Header'
import Index from '../index/Index'
import Footer from '../footer/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'overview',
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
<style lang="scss" scoped>
$hori-offset: 0;

%div_turn {
  position: fixed;
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
