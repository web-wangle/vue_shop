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
        <section class="strategy">
          <div class="strategy_head"><span>推荐攻略</span></div>
          <a href="" v-for="(item, index) in strategyArray" :key="index" :class="'strategy-'+index">
            <div class="strategyTitle">
              <vSection class="title" :sectionContent="item.strategyTitle"></vSection>
              <span v-if="index === 0">蜂首</span>
            </div>
            <div class="strategyMain">
              <img :src="item.strategyImage" alt="">
              <div>
                <div>文章</div>
                <div>
                  <span>浏览量</span>
                  <span>用户名</span>
                  <img src="" alt="">
                </div>
              </div>
            </div>
          </a>
        </section>
        <footer>此处为footer</footer>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import vSection from '@/components/vSection'

export default {
  created () {
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
          'swiperUrl': 'http://m.mafengwo.cn/i/11898766.html',
          'swiperImage': 'https://p4-q.mafengwo.net/s13/M00/03/5F/wKgEaVxuiNKADNPmAAT9qaZtbPU89.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        },
        {
          'swiperUrl': 'http://m.mafengwo.cn/i/11598414.html',
          'swiperImage': 'https://b4-q.mafengwo.net/s13/M00/34/AC/wKgEaVxtQmeAAysLAATOUOAVOg899.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        },
        {
          'swiperUrl': 'http://m.mafengwo.cn/i/11828398.html',
          'swiperImage': 'https://n1-q.mafengwo.net/s13/M00/C9/F4/wKgEaVxsB0uATeQnAARcFCA00Rc14.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        }
      ],
      'navArray': [
        {
          'navTxt': '找攻略',
          'navUrl': '/LookingForGuide'
        },
        {
          'navTxt': '看游记',
          'navUrl': 'https://m.mafengwo.cn/note/'
        },
        {
          'navTxt': '问达人',
          'navUrl': 'https://m.mafengwo.cn/wenda/'
        },
        {
          'navTxt': '结伴',
          'navUrl': 'https://m.mafengwo.cn/together/'
        },
        {
          'navTxt': '酒店',
          'navUrl': 'https://m.mafengwo.cn/hotel/#/home'
        },
        {
          'navTxt': '旅行商城',
          'navUrl': 'https://m.mafengwo.cn/sales/'
        },
        {
          'navTxt': '机票',
          'navUrl': 'https://m.mafengwo.cn/flight/'
        },
        {
          'navTxt': '当地玩乐',
          'navUrl': 'https://m.mafengwo.cn/localdeals/'
        }
      ],
      'strategyArray': [ // 推荐攻略假数据
        {
          'strategyTitle': '打破昆明刻板印象，春节我在春城过春天，就是这么厉害啊，哈哈啊哈就是这个味道',
          'strategyImage': 'https://b2-q.mafengwo.net/s13/M00/97/21/wKgEaVxzzuiAGmdAAAL-q5Is_iw00.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
          'strategySummary': '老生常谈，上有天堂，下有苏杭。 游 杭州 ，有人说西湖十景是必游的。但随着人们眼界的不断拓宽，生活品质的不断提升。西湖十景也出现了不同时期的不同标准。 早期： 平湖 秋月，苏堤春晓，断桥残雪，雷锋夕照， 南屏 晚钟，曲院风荷，花港观鱼，柳岸闻莺，三潭映月，两峰插云。 中期：云栖竹径，满陇桂雨，虎跑梦泉， 龙井 问茶，九溪烟树，吴山天风，阮墩环碧， 黄龙 吐翠，玉皇飞云，宝石流霞。 近期：北街梦寻，万松书缘，湖滨晴雨，钱祠表忠，岳墓 栖霞 ，杨堤景行，梅坞春早，三台云水，灵隐禅踪，六和听涛。 旧十景，西湖的环湖大',
          'strategyView': 34717,
          'authorName': '霸气侧漏',
          'authorAvatar': 'https://p1-q.mafengwo.net/s9/M00/CF/ED/wKgBs1fZJgWAGNsZAADAw9Ag4bI60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        },
        {
          'strategyTitle': '打破昆明刻板印象',
          'strategyImage': 'https://b2-q.mafengwo.net/s13/M00/97/21/wKgEaVxzzuiAGmdAAAL-q5Is_iw00.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
          'strategySummary': '老生常谈，上有天堂，下有苏杭。 游 杭州 ，有人说西湖十景是必游的。但随着人们眼界的不断拓宽，生活品质的不断提升。西湖十景也出现了不同时期的不同标准。 早期： 平湖 秋月，苏堤春晓，断桥残雪，雷锋夕照， 南屏 晚钟，曲院风荷，花港观鱼，柳岸闻莺，三潭映月，两峰插云。 中期：云栖竹径，满陇桂雨，虎跑梦泉， 龙井 问茶，九溪烟树，吴山天风，阮墩环碧， 黄龙 吐翠，玉皇飞云，宝石流霞。 近期：北街梦寻，万松书缘，湖滨晴雨，钱祠表忠，岳墓 栖霞 ，杨堤景行，梅坞春早，三台云水，灵隐禅踪，六和听涛。 旧十景，西湖的环湖大',
          'strategyView': 34717,
          'authorName': '霸气侧漏',
          'authorAvatar': 'https://p1-q.mafengwo.net/s9/M00/CF/ED/wKgBs1fZJgWAGNsZAADAw9Ag4bI60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        },
        {
          'strategyTitle': '打破昆明刻板印象，春节我在春城过春天',
          'strategyImage': 'https://b2-q.mafengwo.net/s13/M00/97/21/wKgEaVxzzuiAGmdAAAL-q5Is_iw00.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
          'strategySummary': '老生常谈，上有天堂，下有苏杭。 游 杭州 ，有人说西湖十景是必游的。但随着人们眼界的不断拓宽，生活品质的不断提升。西湖十景也出现了不同时期的不同标准。 早期： 平湖 秋月，苏堤春晓，断桥残雪，雷锋夕照， 南屏 晚钟，曲院风荷，花港观鱼，柳岸闻莺，三潭映月，两峰插云。 中期：云栖竹径，满陇桂雨，虎跑梦泉， 龙井 问茶，九溪烟树，吴山天风，阮墩环碧， 黄龙 吐翠，玉皇飞云，宝石流霞。 近期：北街梦寻，万松书缘，湖滨晴雨，钱祠表忠，岳墓 栖霞 ，杨堤景行，梅坞春早，三台云水，灵隐禅踪，六和听涛。 旧十景，西湖的环湖大',
          'strategyView': 34717,
          'authorName': '霸气侧漏',
          'authorAvatar': 'https://p1-q.mafengwo.net/s9/M00/CF/ED/wKgBs1fZJgWAGNsZAADAw9Ag4bI60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        },
        {
          'strategyTitle': '打破昆明刻板印象，春节我在春城过春天',
          'strategyImage': 'https://b2-q.mafengwo.net/s13/M00/97/21/wKgEaVxzzuiAGmdAAAL-q5Is_iw00.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
          'strategySummary': '老生常谈，上有天堂，下有苏杭。 游 杭州 ，有人说西湖十景是必游的。但随着人们眼界的不断拓宽，生活品质的不断提升。西湖十景也出现了不同时期的不同标准。 早期： 平湖 秋月，苏堤春晓，断桥残雪，雷锋夕照， 南屏 晚钟，曲院风荷，花港观鱼，柳岸闻莺，三潭映月，两峰插云。 中期：云栖竹径，满陇桂雨，虎跑梦泉， 龙井 问茶，九溪烟树，吴山天风，阮墩环碧， 黄龙 吐翠，玉皇飞云，宝石流霞。 近期：北街梦寻，万松书缘，湖滨晴雨，钱祠表忠，岳墓 栖霞 ，杨堤景行，梅坞春早，三台云水，灵隐禅踪，六和听涛。 旧十景，西湖的环湖大',
          'strategyView': 34717,
          'authorName': '霸气侧漏',
          'authorAvatar': 'https://p1-q.mafengwo.net/s9/M00/CF/ED/wKgBs1fZJgWAGNsZAADAw9Ag4bI60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        },
        {
          'strategyTitle': '打破昆明刻板印象，春节我在春城过春天',
          'strategyImage': 'https://b2-q.mafengwo.net/s13/M00/97/21/wKgEaVxzzuiAGmdAAAL-q5Is_iw00.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
          'strategySummary': '老生常谈，上有天堂，下有苏杭。 游 杭州 ，有人说西湖十景是必游的。但随着人们眼界的不断拓宽，生活品质的不断提升。西湖十景也出现了不同时期的不同标准。 早期： 平湖 秋月，苏堤春晓，断桥残雪，雷锋夕照， 南屏 晚钟，曲院风荷，花港观鱼，柳岸闻莺，三潭映月，两峰插云。 中期：云栖竹径，满陇桂雨，虎跑梦泉， 龙井 问茶，九溪烟树，吴山天风，阮墩环碧， 黄龙 吐翠，玉皇飞云，宝石流霞。 近期：北街梦寻，万松书缘，湖滨晴雨，钱祠表忠，岳墓 栖霞 ，杨堤景行，梅坞春早，三台云水，灵隐禅踪，六和听涛。 旧十景，西湖的环湖大',
          'strategyView': 34717,
          'authorName': '霸气侧漏',
          'authorAvatar': 'https://p1-q.mafengwo.net/s9/M00/CF/ED/wKgBs1fZJgWAGNsZAADAw9Ag4bI60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        },
        {
          'strategyTitle': '打破昆明刻板印象，春节我在春城过春天',
          'strategyImage': 'https://b2-q.mafengwo.net/s13/M00/97/21/wKgEaVxzzuiAGmdAAAL-q5Is_iw00.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
          'strategySummary': '老生常谈，上有天堂，下有苏杭。 游 杭州 ，有人说西湖十景是必游的。但随着人们眼界的不断拓宽，生活品质的不断提升。西湖十景也出现了不同时期的不同标准。 早期： 平湖 秋月，苏堤春晓，断桥残雪，雷锋夕照， 南屏 晚钟，曲院风荷，花港观鱼，柳岸闻莺，三潭映月，两峰插云。 中期：云栖竹径，满陇桂雨，虎跑梦泉， 龙井 问茶，九溪烟树，吴山天风，阮墩环碧， 黄龙 吐翠，玉皇飞云，宝石流霞。 近期：北街梦寻，万松书缘，湖滨晴雨，钱祠表忠，岳墓 栖霞 ，杨堤景行，梅坞春早，三台云水，灵隐禅踪，六和听涛。 旧十景，西湖的环湖大',
          'strategyView': 34717,
          'authorName': '霸气侧漏',
          'authorAvatar': 'https://p1-q.mafengwo.net/s9/M00/CF/ED/wKgBs1fZJgWAGNsZAADAw9Ag4bI60.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      ]
    }
  },
  components: {
    vSection: vSection
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/css/_theme.scss';

#home{
  background-color: #F6F6F6;
}
.wrapper{
  width: 100%;
  height: 6.67rem;
  overflow: hidden;
  font-size: 0.14rem;
  .content{
    background-color: #ffffff;
  }
}
header{
  display: flex;
  width: 100%;
  .head_left{
    @include Flexcenter(1.05rem, 0.5rem);
    img{
      width: 0.94rem;
      height: 0.25rem;
      transform: scale(0.85);
    }
  }
  .head_middle{
    @include Flexcenter(100%, 100%);
    flex: 1;
    height: 0.5rem;
    padding-right: 0.1rem;
    div{
      @include Flexcenter(100%, 0.26rem);
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
    @include Blockcenter(0.4rem, 0.5rem, 0.5rem);
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
        background-image: url('../assets/images/home/icon_collection.png');
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
.strategy{
  .strategy_head{
    @include Blockcenter(100%, 0.34rem, 0.34rem);
    background-color: #f8f8f8;
    span{
      font-size: 0.15rem;
      color: #999;
      &:before{
        content: "";
        display: inline-block;
        width: 0.08rem;
        height: 0.11rem;
        background: url('../assets/images/home/strategy_head.png') no-repeat;
        background-size: 0.1rem;
        vertical-align: middle;
        margin-right: 0.17rem;
      }
      &:after{
        content: "";
        display: inline-block;
        width: 0.08rem;
        height: 0.11rem;
        background: url('../assets/images/home/strategy_head.png') no-repeat;
        background-size: 0.1rem;
        vertical-align: middle;
        margin-left: 0.17rem;
        background-position: 0 -0.13rem;
      }
    }
  }
  a{
    display: block;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #F7F7F7;
    .strategyTitle{
      position: relative;
      padding-top: 0.1rem;
      padding-left: 0.15rem;
      padding-right: 0.57rem;
      color: #111;
      .title{
        @include ellipsis(3.03rem, 0.5rem, 0.25rem, 0.19rem);
      }
      span{
        @include Blockcenter(0.4rem, 0.21rem, 0.21rem);
        display: block;
        position: absolute;
        right: 0px;
        top: 0.14rem;
        background-color: #F5BE00;
        color: #ffffff;
        font-size: 0.13rem;
      }
    }
    .strategyMain{
      display: flex;
      width: 100%;
      height: 1.14rem;
      box-sizing: border-box;
      padding: 0.1rem 0.15rem 0.15rem 0.15rem;
      img{
        width: 1.3rem;
        height: 0.9rem;
      }
    }
  }
}
</style>
