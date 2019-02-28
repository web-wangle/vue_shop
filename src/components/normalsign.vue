<template>
  <div class="wrapper">
    <div class="tab">
      <ul class="forms">
        <li class="bpttom_gray_line">
          <input name="username" type="text" placeholder="您的邮箱">
        </li>
        <li>
          <input name="password" type="password" placeholder="您的密码">
        </li>
      </ul>
      <span class="forget">忘记密码?</span>
      <div class="tab_btns">
        <button class="btns_yello btns">登录</button>
        <button class="btns_white btns">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mailsign',
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/css/_theme.scss';
// scss定义
$yellow:#ffba33;
$gray:#dadada;
// 定义结束
.fr{
  float: right;
}
.bpttom_gray_line{
  border-bottom: 1px solid $gray;
}
.tab{
  width: 100%;
  .forms{
    border: 1px solid $gray;
    border-radius: 0.02rem;
    margin: 0.05rem 0.1rem;
    li{
      font-family:Arial,Helvetica,"迷你简准圆",sans-serif;
      font-size: 0.16rem;
      input{
        width: 90%;
        height: 0.43rem;
        font-size: 0.16rem;
        line-height: 1rem;
        padding: 0 0.11rem;
        ::-webkit-input-placeholder { /* WebKit browsers */
          color: #dadada;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: #dadada;
        }
      }
    }
  }
  .forget{
    font-size: 0.12rem;
    color: #999;
    float: right;
    margin-right: 0.1rem;
  }
  .tab_btns{
    margin: 0.25rem 0.1rem;
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
  }
}
</style>
