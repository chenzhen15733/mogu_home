<script setup>
import { ref, onMounted } from 'vue'

const isAndroid = ref(false)
const isIOS = ref(false)

const download = {
  TgGroup: 'https://t.me/moguGF',
  TgChat: 'https://t.me/mgspsw',
  Service: 'https://mogushipin.tv/chatlink.html',
  androiddown: 'https://mgapk.lxlmlw.cn:8888/down/mogu_apk/mogu_1.4.1.apk',
  iosdown: 'https://mgapk.lxlmlw.cn:8888/down/mogu_apk/moguapp.mobileconfig'
}

const banners = [
  new URL('./assets/banner1.png', import.meta.url).href,
  new URL('./assets/banner2.png', import.meta.url).href,
  new URL('./assets/banner3.png', import.meta.url).href
]
const currentBanner = ref(0)

onMounted(() => {
  const ua = navigator.userAgent || navigator.vendor || window.opera
  isAndroid.value = /android/i.test(ua)
  isIOS.value = /iPhone|iPad|iPod/i.test(ua)

  setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.length
  }, 2000)
})
</script>

<template>
  <a
    href="https://mogushipin.tv/chatlink.html"
    target="_blank"
    class="customer-btn"
  >
    <img src="./assets/customer.png" alt="客服"/>
  </a>
  <div class="landing-bg">
    <!-- 顶部栏 -->
    <div class="header">
      <div class="header-left">
        <img class="header-logo" src="./assets/header_logo.png" alt="logo" />
        <div class="header-title">
          <div class="main-title">蘑菇视频</div>
          <div class="sub-title">成人情色影视快搜中心</div>
        </div>
      </div>
      <div class="header-right">
        <a :href="download.TgChat" target="_blank" class="header-btn">
          <img src="./assets/business_cooperation.png" alt="商务合作" style="height: 10.2vw" />
        </a>
        <a :href="download.TgGroup" target="_blank" class="header-btn">
          <img src="./assets/tg_group.png" alt="TG群" style="height: 10.2vw" />
        </a>
      </div>
    </div>

    <!-- 背景大图和遮罩 -->
    <div class="main-bg">
      <img class="main-bg-img" :src="banners[currentBanner]" alt="bg" />
      <img class="bottom-mask" src="./assets/bottom_mask.png" alt="bottom mask" />
      <!-- 内容区 -->
      <div class="main-content">
        <div class="center-block">
          <img class="main-title-big-img" src="./assets/free_forever.png" alt="永久免费" style="height: 13vw"/>
          <img class="grid-mask-img" src="./assets/grid_mask.png" alt="grid mask" style="height: 43.7vw"/>

        </div>
        <div class="main-desc-block">
          <div class="main-desc-title">百万影片 无限观看</div>
          <div class="main-desc-subtext">全网最全女优 社区交友互动玩不停</div>
        </div>
      

        <!-- 测速、域名、立即观看 -->
        <div class="domain-row">
          <span class="speed">测速 <span class="speed-num">129ms</span></span>
          <span class="domain">lai.mgzx4.com</span>
          <span class="watch-btn">立即观看</span>
        </div>
        <!-- 安装帮助 -->
        <div class="help-row">
          <span class="warn">⚠️ 安装包损坏解决方案</span>
          <span class="help-desc">链接容易失效,发送"地址"到 mogudizhi@gmail.com</span>
        </div>
        <!-- 下载按钮 -->
        <div class="download-row">
          <a :href="download.iosdown" class="download-btn black">
            <img src="./assets/apple_btn_icon.png" alt="苹果" class="download-icon" />
            <span>苹果下载</span>
          </a>
          <a :href="download.androiddown" class="download-btn black">
            <img src="./assets/android_btn_icon.png" alt="安卓" class="download-icon" />
            <span>安卓下载</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-bg {
  min-height: 100vh;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.header {
  width: 100%;
  height: 11.73vw;
  background: url('./assets/top_bar_mask.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-logo {
  width: 9.17vw;
  height: 9.17vw;
  border-radius: 1.33vw;
  margin-right: 1.33vw;
}
.header-title {
  display: flex;
  flex-direction: column;
}
.main-title {
  font-size: 3.9vw;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0.13vw 0.27vw #c97fa7;
}
.sub-title {
  font-size: 2vw;
  color: #fff;
  opacity: 0.8;
}
.header-right {
  display: flex;
  gap: 0.13vw;
}
.header-btn {
  text-decoration: none;
  display: flex;
  align-items: center;
}
.header-btn img {
  background: none;
  border-radius: 0;
  padding: 0;
}

.main-bg {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 8vw);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
  padding-top: 8vw;
}
.main-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.main-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2.4vw 0 2.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 8vw);
  box-sizing: border-box;
}
.center-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-title-big-img {
  width: 51.87vw;
  margin-top: 69.5vw;
  display: block;
  position: relative;
  z-index: 2;
}
.grid-mask-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85.33vw;
  max-width: 80vw;
  height: auto;
  position: relative;
  z-index: 1;
  margin-top: -6vw;
}
.domain-row {
  background:url('./assets/speed_mask.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  gap: 2.4vw;
  height: 7.57vw;
  border-radius: 1.5vw;
  margin-bottom: 2.4vw;
  height: 8.24vw;
  width: 100%;
  position: relative;
}
.speed {
  color: #fff;
  border-radius: 1.6vw;
  padding: 0.27vw 1.33vw;
  font-size: 3.22vw;
  font-weight: normal;
}
.speed-num {
  color: #4caf50;
  font-size: 2.39vw;
  font-weight: normal;
}
.domain {
  color: #fff;
  border-radius: 1.6vw;
  font-size: 4.4vw;
  margin-left: 10.2vw;
  font-weight: normal;
}
.watch-btn {
  background:url('./assets/watch_button.png') no-repeat center center;
  color: #B9050D;
  border-radius: 1.6vw;
  padding: 0.53vw 2.13vw;
  max-height: 15.8vw;
  margin-left: auto;
  font-size: 2.92vw;
  margin-right: 2.4vw;
}
.watch-btn:hover {
  background: linear-gradient(90deg,#f8b6d2,#ffb6b9);
}
.help-row {
  width: 100%;
  margin-top: 1.3vw;
  margin-bottom: 2.4vw;
  text-align: center;
}
.warn {
  color: #ffe066;
  font-size: 1.87vw;
  font-weight: bold;
  display: block;
  text-align: left;
  margin-left: 2.67vw;
  margin-bottom: 1.72vw;
}
.help-desc {
  color: #fff;
  font-size: 2.92vw;
  line-height: 1.5;
  margin-top: 1.3vw;
}
.download-row {
  display: flex;
  justify-content: center;
  gap: 2.4vw;
  margin-bottom: 2.4vw;
  margin-top: 2.92vw;
  width: 100%;
}
.download-btn.black {
  background: #111;
  color: #fff;
  border-radius: 16vw;
  display: flex;
  align-items: center;
  height: 7vw;
  width: 34vw;
  font-size: 3.33vw;
  padding: 1.6vw 4.27vw;
  padding-left: 10vw;
  text-decoration: none;
  box-shadow: 0 0.27vw 1.07vw #0003;
  border: none;
  gap: 1.33vw;
}
.download-btn.black .download-icon {
  width: 5.5vw;
  height: 5.5vw;
}
.download-btn.black:hover {
  filter: brightness(1.1);
}
@media (max-width: 99.7vw) {
  .main-content {
    padding: 0 0.53vw 0 0.53vw;
  }
  .center-block {
    margin-top: 4vh;
    margin-bottom: 3.2vw;
  }
  .main-title-big-img {
    width: 60vw;
    max-width: 220px;
    margin-bottom: 1.6vw;
  }
  .download-row {
    width: 100%;
    padding: 0 0.53vw;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 1.33vw;
  }
  .download-btn {
    font-size: 2vw;
    padding: 1.33vw 0;
    min-width: 16vw;
    flex: 1 1 16vw;
  }
  .card-pile {
    width: 98vw;
    max-width: 320px;
    height: 21.33vw;
  }
}
.bottom-mask {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
.customer-btn {
  position: fixed;
  left: 1vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
}
.customer-btn img {
  width: 8.4vw;
  height: 8.4vw;
  border-radius: 50%;
}
.main-desc-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.27vw;
  margin-bottom: 3.2vw;
}
.main-desc-title {
  color: #fff;
  font-size: 5.98vw;
  font-weight: 700;
  margin-bottom: 1.07vw;
}
.main-desc-subtext {
  color: #fff;
  font-size: 4vw;
  font-weight: 400;
  opacity: 0.95;
}
</style>

<style>
html, body {
  overflow: hidden;
  height: 100%;
}
</style>
