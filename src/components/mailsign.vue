<template>
  <div class="wrapper">
    <div class="tab">
      <ul class="forms">
        <li class="bpttom_gray_line">
          <input class="width90" name="username" type="text" placeholder="您的邮箱">
        </li>
        <li class="bpttom_gray_line">
          <input name="Verification" type="text" placeholder="验证码">
          <img class="code_img fr" src="../assets/images/sign/code.jpg" alt="验证码">
        </li>
        <li>
          <input name="mailcode" type="text" placeholder="邮箱验证码">
          <button class="code_btn fr">免费获取验证码</button>
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
.fr{
  float: right;
}
.bpttom_gray_line{
  border-bottom: 1px solid $gray;
}
.width90{
  width: 90%;
}
.tab{
  width: 100%;
  .forms{
    border-radius: 0.04rem;
    margin: 0 0.1rem;
    border: 1px solid $gray;
    li{
      font-family:Arial,Helvetica,"迷你简准圆",sans-serif;
      font-size: 0.16rem;
      input{
        display: inline-block;
        height: 0.43rem;
        font-size: 0.16rem;
        padding: 0 0.11rem;
        ::-webkit-input-placeholder { /* WebKit browsers */
          color: #999;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: #999;
        }
      }
      .code_img{
        vertical-align:middle;
        height: 0.4rem;
        width: 1.2rem;
      }
      .code_btn{
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
  .forget{
    font-size: 0.12rem;
    color: #999;
    float: right;
    margin-right: 0.1rem;
    padding-top: 0.03rem;
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
