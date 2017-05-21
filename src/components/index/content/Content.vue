<template lang="jade">
  div.index-content
    div(v-for="(item, index) in divObj" v-bind:class="[item.classId]") {{item.name}}
</template>
<script>
export default {
//   name: 'index',
  data () {
    return {
      divObj: [{classId: 'privilege', name: '今日特惠'},
      {classId: 'leave', name: '剩余房源'},
      {classId: 'intro', name: '关于宾馆'},
      {classId: 'round', name: '周边介绍'}]
    }
  },
  methods: {
    changeNavbarItem: function (item, index) {
      if (item.checked) {
        return
      }
      this.navbar[this.navbarActiveIndex].checked = false
      this.navbarActiveIndex = index
      this.navbar[this.navbarActiveIndex].checked = true
      this.welInfo = item.text
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/custommade/variable.scss';
$feature-content-height: ($index-content-height / 4);
.index-content {
  height: $index-content-height;
}
.privilege, .leave, .intro, .round {
  width: 100%;
  margin-top: 10px;
  height: $feature-content-height;
  line-height: $feature-content-height;
  color: $font-color;
  font-size: 2.6em;
  font-weight: 500;
}
.privilege, .round {
    background: #F48FB1;
}
.intro, .leave {
    background: #BA68C8;
}
@media all and (max-width: 600px), (orientation:portrait){
  %inline-div {
    width: 45%;
    display: inline-block;
    height: 50%;
    margin: 10px;
    font-size: 20px;
    color: #fff;
  }
  .privilege, .leave {
      @extend %inline-div;
  }
  .intro, .round {
      @extend %inline-div;
  }
}

</style>

