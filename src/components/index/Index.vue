
<template lang="jade">
div.content
  index-playpng
  index-content           
</template>
<script>
import Content from './content/Content'
import Playpng from './playpng/Playpng'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: mapGetters({
  }),
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
  .feature {
    display: none;
  }
  .navbar {
    width: 100%;
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

