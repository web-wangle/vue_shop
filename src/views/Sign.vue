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
            <li v-for="(tab,index) in tabs" :class="{active:curtab==index}" @click="toggletab(index)" :key="index">{{tab.title}}</li>
          </ul>
          <div class="tab_content">
            <div class="normal" v-show="isNormal">
              <ul class="forms">
                <li class="bpttom_gray_line">
                  <input name="username" type="text" placeholder="您的邮箱">
                </li>
                <li>
                  <input name="password" type="password" placeholder="您的密码">
                </li>
              </ul>
            </div>
            <div class="mail" v-show="!isNormal">
              <ul class="forms">
                <li class="bpttom_gray_line">
                  <input class="width90" name="username" type="text" placeholder="您的邮箱">
                </li>
                <li class="bpttom_gray_line">
                  <input class="short_width" name="Verification" type="text" placeholder="验证码">
                  <img class="code_img" src="../assets/images/sign/code.jpg" alt="验证码">
                </li>
                <li>
                  <input class="short_width" name="mailcode" type="text" placeholder="邮箱验证码">
                  <button class="code_btn">免费获取验证码</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="sign_btn">
          <span class="forget">忘记密码?</span>
          <div class="tab_btns">
            <button class="btns_yello btns">登录</button>
            <button class="btns_white btns">注册</button>
          </div>
        </div>
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
        }
      ]
    }
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
@import '../assets/css/_theme.scss';
// scss定义
$yellow: #ffba33;
$gray: #dadada;
// 定义结束
.bpttom_gray_line{
  border-bottom: 1px solid $gray;
}
.fr{
  float: right;
}
.wrapper{
  display: block;
  width: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
header{
  display: block;
  height: 0.7rem;
  width: 100%;
  line-height: 0.85rem;
  a{
    display: block;
    margin: 0 auto;
    width: 1rem;
    height: 0.3rem;
    img{
      width: 1rem;
      height: 0.3rem;
    }
  }
}
.tab{
  display: block;
  width: 100%;
  .tab_tit{
    @include Flexcenter(95%, 0.4rem);
    text-align: center;
    margin: 0 2.5%;
    color: #999;
    background: #fafafa;
    li{
      @include Blockcenter(50%, 100%, 0.4rem);
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
    display: block;
    width: 100%;
    margin-top: 0.3rem;
    .forms{
      margin: 0.05rem 2.5%;
      width: 95%;
      border: 1px solid $gray;
      border-radius: 2.5px;
      li{
        position: relative;
        font-family:Arial,Helvetica,"迷你简准圆",sans-serif;
        font-size: 0.16rem;
        width: 100%;
        input{
          width: 94%;
          height: 0.43rem;
          font-size: 0.16rem;
          line-height: 1rem;
          padding: 0 0.1rem;
          box-sizing: content-box;
          border: 1px solid #ffffff;
        }
        input::-webkit-input-placeholder {
          color: $gray;
          font-size: 0.16rem;
        }
        input:focus{
          height: 0.43rem;
          width: 94%;
          border:1px solid $yellow;
        }
        .code_img{
          position: absolute;
          right: 0.05rem;
          top: 0.02rem;
          vertical-align:middle;
          height: 0.4rem;
          width: 1.2rem;
        }
        .code_btn{
          position: absolute;
          right: 0;
          top: 0;
          width: 1.1rem;
          height: 0.33rem;
          border-radius: 0.05rem;
          background: #ff8a00;
          color: white;
          font-size: 0.12rem;
          margin: 0.05rem 0.1rem;
        }
      }
    }
  }
}
.sign_btn{
  display: block;
  width: 100%;
  .forget{
    font-size: 0.12rem;
    color: #999;
    float: right;
    margin-right: 0.1rem;
    padding-top: 0.03rem;
    margin-bottom: 0.15rem;
  }
  .tab_btns{
    display: block;
    width: 100%;
    .btns{
      font-size: 0.18rem;
      width: 95%;
      height: 0.35rem;
      border-radius: 0.05rem;
      margin: 0.05rem 2.5%;
    }
    .btns_yello{
      background: $yellow;
      color: white;
      border: 1px solid #d8b165;
    }
    .btns_white{
      background: white;
      color: $yellow;
      border: 1px solid $yellow;
    }
  }
}
.third_party{
  display: block;
  width: 100%;
  margin-top: 0.2rem;
  .tip{
    @include Flexcenter(100%,0.3rem);
    @include Blockcenter(100%, 100%, 0.3rem);
    font-size: 0.12rem;
    .text{
      color: #CCC;
      padding: 0 1%;
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
