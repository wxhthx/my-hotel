<template lang="jade">
  div.details 详细信息
    div.sun-container
      div.sun
        div.shine.left
        div.shine.left-top
        div.shine.top
        div.shine.top-right
        div.shine.right
        div.shine.bottom-right
        div.shine.bottom
        div.shine.bottom-left
</template>
<script>
export default {
  name: 'details',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    .details {
        width: 100%;
        height: 600px;
        background: #B9887D;
    }
    div.sun-container {
      width: 100%;
      position: relative;
      top: 10%;
      display: flex;
      justify-content: center;
    }
    div.sun {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: orangered;
      position: relative;
      animation: rotateSun 4s linear infinite;
    }
    %vertical {
      width: 0;
      height: 50px;
    }
    div.shine {
      width: 50px;
      height: 0;
      border: 2px dotted #000;
      position: absolute;
      &.left {
        left: -25%;
        top: 50%;
      }
      &.left-top {
        transform: skewY(45deg);
      }
      &.top {
        @extend %vertical;
        left: 50%;
        top: -25%;
      }
      &.top-right {
        transform: skewY(125deg);
        left: 75%;
        top: -10%;
      }
      &.right {
        left: 105%;
        top: 50%;
      }
      &.bottom {
        @extend %vertical;
        left: 50%;
        top: 105%;
      }
      &.bottom-right {
        transform: skewY(45deg);
        top: 100%;
        left: 95%;
      }
      &.bottom-left {
        transform: skewY(125deg);
        left: 0;
        top: 105%;
      }
    }
    @keyframes rotateSun {
      0% {transform: rotate(0);}
      12.5% {transform: rotate(45deg);}
      25% {transform: rotate(90deg);}
      37.5% {transform: rotate(135deg);}
      50% {transform: rotate(180deg);}
      62.5% {transform: rotate(225deg);}
      75% {transform: rotate(270deg);}
      87.5% {transform: rotate(315deg);}
      100% {transform: rotate(360deg);}
    }
</style>
