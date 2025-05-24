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
    <img src="./assets/customer.png" alt="客服" />
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
          <img src="./assets/business_cooperation.png" alt="商务合作" style="height: 60px" />
        </a>
        <a :href="download.TgGroup" target="_blank" class="header-btn">
          <img src="./assets/tg_group.png" alt="TG群" style="height: 60px" />
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
          <img class="main-title-big-img" src="./assets/free_forever.png" alt="永久免费" />
          <img class="grid-mask-img" src="./assets/grid_mask.png" alt="grid mask" />

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
  background: #f8e1e7;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.header {
  width: 100%;
  height: 60px;
  background: url('./assets/top_bar_mask.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
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
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 10px;
}
.header-title {
  display: flex;
  flex-direction: column;
}
.main-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 2px #c97fa7;
}
.sub-title {
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}
.header-right {
  display: flex;
  gap: 1px;
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
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
  padding-top: 60px;
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
  padding: 0 18px 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
}
.center-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-title-big-img {
  width: 389px;
  margin-top: 241px;
  display: block;
  position: relative;
  z-index: 2;
}
.grid-mask-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 640px;
  max-width: 80vw;
  height: auto;
  position: relative;
  z-index: 1;
  margin-top: -30px;
}
.domain-row {
  background:url('./assets/speed_mask.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
  height: 40px;
  width: 100%;
  position: relative;
}
.speed {
  color: #fff;
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 13px;
  font-weight: normal;
}
.speed-num {
  color: #4caf50;
  font-weight: normal;
}
.domain {
  color: #fff;
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 13px;
  font-weight: normal;
}
.watch-btn {
  background:url('./assets/watch_button.png') no-repeat center center;
  color: #B9050D;
  border-radius: 12px;
  padding: 4px 16px;
  max-height: 20px;
  margin-left: auto;
  margin-right: 18px;
}
.watch-btn:hover {
  background: linear-gradient(90deg,#f8b6d2,#ffb6b9);
}
.help-row {
  width: 100%;
  border-radius: 10px;
  padding: 10px 0 6px 0;
  margin-bottom: 18px;
  text-align: center;
}
.warn {
  color: #ffe066;
  font-size: 14px;
  font-weight: bold;
  display: block;
  text-align: left;
  margin-left: 20PX;
  margin-bottom: 2px;
}
.help-desc {
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
}
.download-row {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 18px;
  height: 40px;
  width: 100%;
}
.download-btn.black {
  background: #111;
  color: #fff;
  border-radius: 120px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 32px;
  text-decoration: none;
  box-shadow: 0 2px 8px #0003;
  border: none;
  gap: 10px;
}
.download-btn.black .download-icon {
  width: 28px;
  height: 28px;
}
.download-btn.black:hover {
  filter: brightness(1.1);
}
@media (max-width: 500px) {
  .main-content {
    padding: 0 4px 0 4px;
  }
  .center-block {
    margin-top: 4vh;
    margin-bottom: 24px;
  }
  .main-title-big-img {
    width: 60vw;
    max-width: 220px;
    margin-bottom: 12px;
  }
  .download-row {
    width: 100%;
    padding: 0 4px;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 10px;
  }
  .download-btn {
    font-size: 15px;
    padding: 10px 0;
    min-width: 120px;
    flex: 1 1 120px;
  }
  .card-pile {
    width: 98vw;
    max-width: 320px;
    height: 160px;
  }
}
.bottom-mask {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: auto;
  z-index: 2;
  pointer-events: none;
}
.customer-btn {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
}
.customer-btn img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 2px 8px #b94e8c33;
  background: #fff;
}
.main-desc-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
}
.main-desc-title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}
.main-desc-subtext {
  color: #fff;
  font-size: 16px;
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
