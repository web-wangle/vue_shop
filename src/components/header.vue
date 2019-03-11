<template>
  <div class="wrapper">
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
    @include Flexcenter(1, 0.5rem);
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
</style>
