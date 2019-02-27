# vue-ebook

## 前期准备
1. 字体图标
iconmoon制作字体文件
2.  使用web字体
 直接拷贝到public文件夹下
3. 引入rem字体
在app.vue里改变html字体大小
```
<script>
export default {
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontsize = window.innerWidth / 10
  fontsize = fontsize > 50 ? 50 : fontsize
  html.style.fontSize = fontsize + 'px'
})
</script>
```
4. 引入reset默认样式