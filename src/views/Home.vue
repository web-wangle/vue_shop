<template>
  <div id="home">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <header>
          <router-link to="/" class="head_left">
            <img src="../assets/images/home/home_log.png" alt="logo">
          </router-link>
          <div class="head_middle">
            <div>
              <input type="text" placeholder="搜索目的地/攻略/游记">
              <img src="../assets/images/home/btn_search.png" alt="" class="search">
            </div>
          </div>
          <router-link to="/sign" class="head_right">登录</router-link>
        </header>
        <section id="swiper">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in swiperArray" :key="index">
              <a :href="item.swiperUrl">
                <img :src="item.swiperImage" alt="">
              </a>
            </van-swipe-item>
          </van-swipe>
        </section>
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
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  data () {
    return {
      'swiperArray': [ // 轮播图假数据
        {
          swiperUrl: 'http://m.mafengwo.cn/i/11898766.html',
          swiperImage: 'https://p4-q.mafengwo.net/s13/M00/03/5F/wKgEaVxuiNKADNPmAAT9qaZtbPU89.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        },
        {
          swiperUrl: 'http://m.mafengwo.cn/i/11598414.html',
          swiperImage: 'https://b4-q.mafengwo.net/s13/M00/34/AC/wKgEaVxtQmeAAysLAATOUOAVOg899.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        },
        {
          swiperUrl: 'http://m.mafengwo.cn/i/11828398.html',
          swiperImage: 'https://n1-q.mafengwo.net/s13/M00/C9/F4/wKgEaVxsB0uATeQnAARcFCA00Rc14.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        }
      ]
    }
  },
  methods: {
  }
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
      .search{
        width: 0.16rem;
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
#swiper{
  width: 100%;
  height: 2.1rem;
  img{
    width: 100%;
    height: 2.1rem;
  }
}
</style>
