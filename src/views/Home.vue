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
        <section class="swiper">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in swiperArray" :key="index">
              <a :href="item.swiperUrl">
                <img :src="item.swiperImage" alt="">
              </a>
            </van-swipe-item>
          </van-swipe>
        </section>
        <section class="nav">
          <div>
            <a :href="item.navUrl" v-for="(item, index) in navArray" :key="index" :class="'navIcon-'+index">
              <div class="navIcon"></div>
              <p class="nevTxt">{{item.navTxt}}</p>
            </a>
          </div>
        </section>
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
          eventPassthrough: 'horizontal'
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
      ],
      'navArray': [
        {
          navTxt: '找攻略',
          navUrl: 'https://m.mafengwo.cn/mdd/'
        },
        {
          navTxt: '看游记',
          navUrl: 'https://m.mafengwo.cn/note/'
        },
        {
          navTxt: '问达人',
          navUrl: 'https://m.mafengwo.cn/wenda/'
        },
        {
          navTxt: '结伴',
          navUrl: 'https://m.mafengwo.cn/together/'
        },
        {
          navTxt: '酒店',
          navUrl: 'https://m.mafengwo.cn/hotel/#/home'
        },
        {
          navTxt: '旅行商城',
          navUrl: 'https://m.mafengwo.cn/sales/'
        },
        {
          navTxt: '机票',
          navUrl: 'https://m.mafengwo.cn/flight/'
        },
        {
          navTxt: '当地玩乐',
          navUrl: 'https://m.mafengwo.cn/localdeals/'
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
.swiper{
  width: 100%;
  height: 2.1rem;
  img{
    width: 100%;
    height: 2.1rem;
  }
}
.nav{
  div{
    width: auto;
    height: 2.16rem;
    margin-top: 10px;
    padding: 0 0.05rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    a{
      padding-top: 0.2rem;
      width: 0.9rem;
      height: 0.92rem;
      box-sizing: border-box;
      font-size: 0.16rem;
      .navIcon{
        margin: 0 auto 0.06rem auto;
        padding: 0;
        width: 0.46rem;
        height: 0.46rem;
        background-image: url('../assets/images/home/i_nav3.png');
        background-size: 1.9rem;
      }
      p{
        width: inherit;
        display: table-cell;
        height: 0.2rem;
        text-align: center;
        vertical-align: bottom;
      }
    }
    .navIcon-0{
      color: #ff9d00;
      .navIcon{
        background-position: 0 0;
      }
    }
    .navIcon-1{
      color: #feca2b;
      .navIcon{
        background-position: 0 0.47rem;
      }
    }
    .navIcon-2{
      color: #42d6ba;
      .navIcon{
        background-position: 0.96rem 0.47rem;
      }
    }
    .navIcon-3{
      color: #f94a87;
      .navIcon{
        background-position: 1.43rem 0.47rem;
      }
    }
    .navIcon-4{
      color: #32a2f1;
      .navIcon{
        background-position: 1.43rem 0;
      }
    }
    .navIcon-5{
      color: #fd4e4e;
      .navIcon{
        background-position: 0.96rem 0;
      }
    }
    .navIcon-6{
      color: #acce0e;
      .navIcon{
        background-position: 0.49rem 0;
      }
    }
    .navIcon-7{
      color: #b160df;
      .navIcon{
        background-position: 0.49rem 0.47rem;
      }
    }
  }
}
</style>
