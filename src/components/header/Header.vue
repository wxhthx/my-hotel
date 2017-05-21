<template lang="jade">
header(v-bind:class="{'showModal': collapseFlag}")
  nav.navbar.navbar-toggleable-md.navbar-light
    button.navbar-toggler( type="button" @click="collapseNavbar")
      span.navbar-toggler-icon
    div.collapse.navbar-collapse(v-bind:class="{'show': collapseFlag}")
      div.navbar-brand.logoName 栖居吧
      ul.navbar-nav.mr-auto.mt-2.mt-lg-0
        li.navbar-item.nav-item(v-for="(item, index) in navbar" @click="collapseFlag = false")
          router-link.menu-item.nav-link(v-bind:to="item.path") {{item.text}}
      form.form-inline
        div.logo logo
        button.btn.btn-primary.btn-login 登录
        button.btn.btn-primary.btn-submit 注册
</template>
<script>
export default {
  data () {
    return {
      navbar: [{text: '首页', checked: true, path: 'index'},
            {text: '详细数据', checked: false, path: 'details'},
            {text: '我的信息', checked: false, path: 'mine'}],
      navbarActiveIndex: 0,
      collapseFlag: false
    }
  },
  methods: {
    collapseNavbar: function () {
      this.collapseFlag = !this.collapseFlag
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  & ul{
    .navbar-item {
      // width: (100% /3);
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
.logo {
  height: 50px;
  color: white;
}
.logo {
  width: 200px;
  background: #E3F2FD;
  margin-right: 30px;
}
@media all and (max-width: 600px), (orientation:portrait){
  .feature {
    display: none;
  }
  header.showModal {
    position: absolute;
    background: #EEEEEE;
    // opacity: 0.3;
    width: 100%;
  }
  .navbar {
    text-align: left;
    & ul{
      .navbar-item {
        & .menu-item {
          &.active, &:focus, &:hover {
            font-size: 1.1em; 
          }
        }
      }
    }
  }
  .form-inline {
    .logo {
      display: none;
    }
  }
}
</style>
