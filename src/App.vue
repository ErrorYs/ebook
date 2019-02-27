<template>
  <div id="app">
    <div class="box">哈哈</div>
    <span class="icon-bookmark"></span>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['test'])
  },
  mounted () {
    this.$store.dispatch('setTest', 101).then(() => {
      console.log(this.test)
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>
<style lang="scss" scoped>
@import "./assets/styles/global.scss";
.box {
  width: 1rem;
  height: 1rem;
  background-color: pink;
  font-size: px2rem(20);
}
</style>
