<template lang="jade">
  div.details 详细信息
    div.sun-container
      div.sun
        div.brow.left-brow
        div.brow.right-brow
        div.smile
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
      animation: rotateSun 4s linear 1;
    }
    %vertical {
      width: 0;
      height: 50px;
    }
    %brow-simle-common {
      width: 100px;
      height: 100px;
      background: transparent;
      border: 0;
      position: absolute;
      left: 5%;
    }
    div.brow {
      @extend %brow-simle-common;
      border-top: 3px solid #fff;
      border-radius: 40%;    
      top: 20%;
      &.right-brow {
        left: 55%;
      }
    }
    div.smile {
      @extend %brow-simle-common;
      border-bottom: 3px solid #fff;
      border-radius: 50%;
      top: 50%;  
      left: 30%;
    }
    div.shine {
      width: 50px;
      height: 0;
      border: 2px dotted #000;
      position: absolute;
      &.left {
        left: -55px;
        top: 50%;
      }
      &.left-top {
        transform: rotate(45deg);
      }
      &.top {
        @extend %vertical;
        left: 50%;
        top: -55px;
      }
      &.top-right {
        transform: rotate(125deg);
        left: 75%;
        top: -10%;
      }
      &.right {
        left: 101%;
        top: 50%;
      }
      &.bottom {
        @extend %vertical;
        left: 50%;
        top: 101%;
      }
      &.bottom-right {
        transform: rotate(45deg);
        top: 100%;
        left: 95%;
      }
      &.bottom-left {
        transform: rotate(125deg);
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
