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
  
  width: 100%;
  margin-top: 80px;
  padding-top: 20px;
  display: block;
  height: 30px;
  text-align: center;
  border-top: 1px solid #BBDEFB;
  .copyright {
    margin-right: 20px;
  }
}
@media all and (max-width: 600px), (orientation:portrait){
footer {
    background: #BBDEFB;
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

