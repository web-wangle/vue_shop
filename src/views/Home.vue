<template>
  <div id="home">
    <div class="wrapper">
      <ul class="content">
        <header>
          <router-link to="/" class="head_left">
            <img src="../assets/images/home/home_log.png" alt="logo">
          </router-link>
          <div class="head_middle">
            <div>
              <input type="text" placeholder="搜索目的地/攻略/游记">
              <van-icon name="search" size="0.2rem" color="#B5B5B5"/>
            </div>
          </div>
          <router-link to="/sign" class="head_right">登录</router-link>
        </header>
        <section>此处为轮播图</section>
        <section>此处为icon合集</section>
        <section>此处为攻略</section>
        <footer>此处为footer</footer>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  mounted () {
    // 初始化better-scroll
    this.$nextTick(() => {
      document.getElementsByClassName('wrapper')[0].style.height = `${document.documentElement.clientHeight}px`
      this.scroll = new BScroll('.wrapper', {
        scrollY: true,
        click: true,
        tap: true
      })
    })
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
// scss定义
@mixin Flexcenter{
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin Blockcenter($line-height){
  text-align: center;
  line-height: $line-height
}
// 定义结束
.router-link-active{
  text-decoration: none;
  color: black;
}
.wrapper{
  width: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
header{
  display: flex;
  width: 100%;
  .head_left{
    @include Flexcenter;
    width: 1.05rem;
    height: 0.5rem;
    img{
      width: 0.94rem;
      height: 0.25rem;
      transform: scale(0.85);
    }
  }
  .head_middle{
    @include Flexcenter;
    flex: 1;
    height: 0.5rem;
    padding-right: 0.1rem;
    div{
      @include Flexcenter;
      width: 100%;
      height: 0.26rem;
      background-color: #f3f3f3;
      border-radius: 0.346rem;
      padding-left: 0.12rem;
      input{
        width: 1.74rem;
        height: 0.26rem;
        font-size: 0.12rem;
        background-color: #f3f3f3;
        line-height: 0.26rem
      }
    }
  }
  .head_right{
    width: 0.4rem;
    height: 0.5rem;
    @include Blockcenter(0.5rem);
    color: #ffa800;
  }
}
</style>
