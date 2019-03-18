<template>
  <div class="wrapper">
    <header>
      <router-link to="/" class="head_left">
        <img src="../assets/images/home/home_log.png" alt="logo">
      </router-link>
      <div class="head_right">
        <router-link to="/" class="right_text">官网首页</router-link>
        <router-link to="/" class="right_img"></router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/css/_theme.scss';
.wrapper{
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
header{
  display: flex;
  width: 100%;
  height: 0.5rem;
  font-size: 0.15rem;
  font-family: 'PingFangSC-Light',Arial,Helvetica,sans-serif,"Hiragino Sans GB";
  border-bottom: 1px solid #dadada;
  .head_left{
    @include Flexcenter(1.2rem, 0.5rem);
    padding-left: 0.05rem;
    img{
      width: 1.2rem;
      height: 0.33rem;
      transform: scale(0.85);
    }
  }
  .head_right{
    display: flex;
    height: 0.5rem;
    position: absolute;
    right: 0;
    top: 0;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .right_text{
      color: #ffa800;
      padding: 0 0.15rem;
      border-right: 1px solid #dadada;
    }
    .right_img{
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 auto 0.08rem auto;
      padding: 0;
      background-image: url('../assets/images/comment/head.png');
      background-size: 1rem 3rem;
      background-position: 0 -0.45rem;
    }
  }
}
</style>
