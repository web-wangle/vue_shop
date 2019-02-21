<template>
  <div id="home">
    <div class="wrapper">
      <ul class="content">
        <header>此处为header</header>
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
        scrollY: true
      })
    })
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.wrapper{
  width: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
</style>
