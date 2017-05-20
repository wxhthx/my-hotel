<template lang="jade">
  div.container
    header
      ul.navbar
        li.navbar-item(v-for="item in navbar")(v-bind:class="{ active: item.checked }"){{item.text}}
    div.content
      div.title {{welInfo}}
    footer
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      welInfo: 'Welcome to my hotel App',
      navbar: [{text: '首页', checked: true},
              {text: '详细数据', checked: false},
              {text: '我的信息', checked: false}]
    }
  }
}
</script>

<style>
 ul, li {
   list-style: none;
 }
</style>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: row flex-start;
}
.navbar-item {
  width: calc(100% /3);
}
.navbar-item.active {
  color: #FF5252;
  font-size: 16px;
}
</style>

