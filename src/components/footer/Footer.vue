<template lang="jade">
  footer
      div.about
        span.copyright {{about}}
        span.support {{support}}
</template>

<script>
export default {
  data () {
    return {
      about: '@copyright: 栖居吧宾馆所有',
      support: '微信: helloMR.W 技术支持'
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: #BBDEFB;
  width: 100%;
  margin-top: 150px;
  display: block;
  height: 30px;
  text-align: center;
  .copyright {
    margin-right: 20px;
  }
}
@media all and (max-width: 600px), (orientation:portrait){
footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 100px;
    .about {
      font-size: 1.1em;
      .copyright {
        display: block;
      }
    }
  }
}
</style>

