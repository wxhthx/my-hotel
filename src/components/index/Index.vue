
<template lang="jade">
  div.container
    header
      div.navbar
        ul
          li.navbar-item(v-for="(item, index) in navbar")
            a.menu-item(v-bind:class="{ active: item.checked }")(@click="changeNavbarItem(item, index)"){{item.text}}
      div.feature
        div.logo logo
        div.btn
          button.btn-primary 登录
          button.btn-primary 注册
    div.content
      div.title {{welInfo}}
      index-playpng
      index-content
    footer
      div.about
        span.copyright{{about}}
        span.support{{support}}
</template>
<script>
import Content from './content/Content.vue'
import Playpng from './playpng/Playpng.vue'
export default {
  name: 'index',
  data () {
    return {
      welInfo: 'Welcome to my hotel App',
      navbar: [{text: '首页', checked: true},
              {text: '详细数据', checked: false},
              {text: '我的信息', checked: false}],
      navbarActiveIndex: 0,
      about: '@copyright: 栖居吧宾馆所有',
      support: '微信: helloMR.W 技术支持'
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
  },
  components: {
    'index-content': Content,
    'index-playpng': Playpng
  }
}
</script>

<style lang="scss" scoped>
.navbar, .feature {
  display: inline-block;
}
.navbar {
  width: 50%;
  & ul{
    display: flex;
    justify-content: row flex-start;
    .navbar-item {
      width: (100% /3);
      & .menu-item {
        // color: 
        &.active, &:focus, &:hover {
          color: #FF5252;
          font-size: 16px;
        }
      }
    }
  }
}
.feature {
  width: 50%;
  .logo, .btn {
    display: inline-block;
    height: 50px;
    color: white;
  }
  .logo {
    width: 30%;
    background: #E3F2FD;
  }
}
.content {
  height: 600px;
}
footer {
  background: #BBDEFB;
  width: 95%;
  display: block;
  height: 30px;
  text-align: center;
  .copyright {
    margin-right: 20px;
  }
}
@media all and (max-width: 600px), (orientation:portrait){
  .feature {
    display: none;
  }
  .navbar {
    width: 100%;
    .navbar-item {
      & .menu-item {
        &.active, &:focus, &:hover {
          font-size: 1.1em; 
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 1px;
    height: 50px;
    .about {
      font-size: 1.1em;
      .copyright {
        display: block;
      }
    }
  }
}

</style>

