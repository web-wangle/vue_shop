<template>
  <div class="wrapper">
    <commentHeader></commentHeader>
    <section class="seach">
      搜索框
    </section>
    <section class="top_news">
        图片文章
    </section>
  </div>
</template>

<script>
import commentHeader from '../components/header'

export default {
  data () {
    return {}
  },
  components: {
    commentHeader
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/css/_theme.scss';
.wrapper{
  display: block;
  width: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
</style>
