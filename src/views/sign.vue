<template>
  <div id="sign">
    <div class="wrapper">
      <ul class="content">
        <header>
          <router-link to="/" >
            <img src="../assets/images/sign/logo200.png" alt="logo">
          </router-link>
        </header>
        <section class="tab">
          <ul class="tab_tit">
            <li v-for="(tab,index) in tabs" :class="{active:curtab==index}" @click="toggletab(index)" v-html="tab.title"></li>
          </ul>
          <div class="tab_content">
            <normal-Sign v-show="isNormal" ></normal-Sign>
            <mail-Sign v-show="!isNormal" ></mail-Sign>
          </div>
        </section>
        <section class="third_party">
          <div class="tip">
            <span class="line"></span>
            <span class="text">使用第三方帐号登录</span>
            <span class="line"></span>
          </div>
          <div class="account">
            <div>
              <a :href="item.navUrl" v-for="(item, index) in navArray" :key="index" :class="'navIcon-'+index">
                <div class="navIcon"></div>
                <p class="nevTxt">{{item.navTxt}}</p>
              </a>
            </div>
          </div>
        </section>
      </ul>
    </div>
  </div>
</template>

<script>
import normalSign from '../components/normalsign'
import mailSign from '../components/mailsign'

export default {
  data () {
    return {
      tabs: [{ id: 0, title: '普通登录', iscurTab: true }, { id: 1, title: '邮箱登录', iscurTab: false }],
      curtab: 0,
      isNormal: true,
      'navArray': [
        {
          navTxt: '新浪微博',
          navUrl: 'http://passport.mafengwo.cn/weibo'
        },
        {
          navTxt: 'QQ登录',
          navUrl: 'http://passport.mafengwo.cn/qq'
        },
      ]
    }
  },
  components: {
    normalSign,
    mailSign
  },
  methods: {
    toggletab: function (index) {
      this.curtab = index
      if (index === 0) {
        this.isNormal = true
      } else {
        this.isNormal = false
      }
    }
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
$yellow:#ffba33;
$gray:#dadada;
// 定义结束
.wrapper{
  width: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
header{
  @include Flexcenter;
  width: 100%;
  height: 0.7rem;
  img{
    width: 1rem;
    height: 0.3rem;
  }
}
.tab{
  display: block;
  width: 100%;
  .tab_tit{
    @include Flexcenter;
    text-align: center;
    margin: 0 0.1rem;
    color: #999;
    background: #fafafa;
    height: 0.4rem;
    li{
      @include Blockcenter(0.4rem);
      width: 50%;
      font-size: 0.15rem;
      display: inline-block;
      border-top: 0.02rem solid $gray;
    }
    .active{
      color: $yellow;
      background: white;
      border-top: 0.02rem solid $yellow;
    }
  }
  .tab_content{
    @include Flexcenter;
    width: 100%;
    margin-top: 0.3rem;
  }
}
.third_party{
  width: 100%;
  .tip{
    width: 100%;
    @include Flexcenter;
    height: 0.3rem;
    @include Blockcenter(0.3rem);
    font-size: 0.12rem;
    .text{
      color: #CCC;
      padding: 0 0.05rem;
      width: 30%;
    }
    .line {
      display: inline-block;
      width: 34%;
      border-top: 0.1px solid $gray;
      height: 0.01rem;
    }
  }
  .account{
    margin-top: 0.15rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    width: 100%;
    div{
      height: 0.8rem;
      padding: 0 0.05rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      a{
        width: 1.5rem;
        height: 0.75rem;
        box-sizing: border-box;
        font-size: 0.14rem;
        color: #666;
        background: #f3f3f3;
        padding: 0.1rem 0.15rem;
        margin: 0.15rem;
        border: 1px solid #e6e5e5;
        border-radius: 0.05rem;
        .navIcon{
          margin: 0 auto 0.06rem auto;
          padding: 0;
          width: 0.4rem;
          height: 0.36rem;
          background-image: url('../assets/images/sign/connect_ico.png');
          background-size: 1.5rem;
        }
        p{
          width: inherit;
          display: table-cell;
          text-align: center;
          vertical-align: bottom;
        }
      }
      .navIcon-0{
        .navIcon{
          background-position: 0 0;
        }
      }
      .navIcon-1{
        .navIcon{
          background-position: 1rem 0.02rem;
        }
      }
    }
  }
}
</style>
