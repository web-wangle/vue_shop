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
            <div class="tab_active">
                <span class="title">
                    普通登录
                </span>
                <ul class="forms">
                    <li>
                        <input name="username" type="text" placeholder="您的邮箱/手机号">
                    </li>
                    <li>
                      <input name="password" type="password" placeholder="您的密码">
                    </li>
                </ul>
                <span class="forget">忘记密码?</span>
                <div class="tab_btn">
                    <button class="btns_yello btn" >登录</button>
                    <button class="btns_white btn" >注册</button>
                </div>
            </div>
            <div class="tab_on"></div>
        </section>
        <section class="third_party">
            <span class="line"></span>
            <span class="text">使用第三方帐号登录</span>
            <span class="line"></span>
        </section>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  width: 100%;
  .title{
    color: $yellow;
  }
  .tab_child{
    border: 0.01rem solid $gray;
    border-radius: 0.05rem;
    padding-top: 0.3rem;
  }

}
.forms{
  border: 1px solid $gray;
  border-radius: 0.05rem;
  margin: 0 0.1rem;
  input{
    height: 0.43rem;
    font-size: 0.16rem;
    line-height: 1rem;
    text-indent: 0.11rem;
  }
}

.tab_btns{
  padding: 0.05rem 0.1rem;
}
.btns{
  font-size: 0.18rem;
  width: 100%;
  height: 0.35rem;
  border-radius: 0.05rem;
  margin: 0.05rem 0;
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

.third_party{
  margin-top: 1rem;
  @include Flexcenter;
  .text{
      color: $gray;
  }
  .line {
      display: inline-block;
      width: 1rem;
      border: 0.1px solid $gray;
      margin: 0 0.1rem;
  }
}
</style>
