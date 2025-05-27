<script setup>
import { ref, onMounted } from 'vue'

const isAndroid = ref(false)
const isIOS = ref(false)
const isPC = ref(false)

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

const wapurl = [
  'lai.mgzx4.com',
  'kan.mgzx4.com',
  'pian.mgzx4.com',
]
const wapurlLinks = [
  'https://lai.mgzx4.com',
  'https://kan.mgzx4.com',
  'https://pian.mgzx4.com',
]
const currentDomain = ref(0)

const pcGirls = [
  { img: new URL('./assets/banner1.png', import.meta.url).href, label: '原创剧情' },
  { img: new URL('./assets/banner2.png', import.meta.url).href, label: '偷拍泄密' },
  { img: new URL('./assets/banner3.png', import.meta.url).href, label: '黑丝辣妹' },
  { img: new URL('./assets/banner2.png', import.meta.url).href, label: '乱伦禁忌' },
  { img: new URL('./assets/banner1.png', import.meta.url).href, label: '更多推荐' },
  { img: new URL('./assets/banner3.png', import.meta.url).href, label: '更多推荐' },
]

onMounted(() => {
  const ua = navigator.userAgent || navigator.vendor || window.opera
  isAndroid.value = /android/i.test(ua)
  isIOS.value = /iPhone|iPad|iPod/i.test(ua)
  isPC.value = window.innerWidth >= 1024
  window.addEventListener('resize', () => {
    isPC.value = window.innerWidth >= 1024
  })

  setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.length
  }, 2000)

  setInterval(() => {
    currentDomain.value = (currentDomain.value + 1) % wapurl.length
  }, 2000)
})
</script>

<template>
  <div v-if="isPC" class="landing-bg pc-mode">
    <div class="pc-topbar">
      <a :href="download.TgChat" target="_blank" class="pc-topbar-btn"><img src="./assets/pc_cooperation_btn.png" alt="商务合作" /></a>
      <a :href="download.TgGroup" target="_blank" class="pc-topbar-btn"><img src="./assets/pc_offical_btn.png" alt="官方TG群" /></a>
    </div>
    <div class="pc-left-design">
      <div class="pc-logo-title-row">
        <img src="./assets/header_logo.png" alt="logo" class="pc-logo-design" />
        <div class="pc-title-col">
          <div class="pc-app-title">蘑菇视频</div>
          <div class="pc-app-subtitle">全网最全成人&福利视频聚合平台</div>
        </div>
      </div>
      <div class="pc-main-title">百万影片 免费无限观看</div>
      <div class="pc-main-desc">全网最全女优 社区交友互动玩不停</div>
      <div class="pc-qrcode-design">
        <img src="./assets/pc_qrcode.png" alt="二维码" />
      </div>
      <div class="pc-qrcode-tip">建议使用UC浏览器下载</div>
      <div class="pc-domain-bar">
        <span class="pc-speed">测速1<br/><span class="pc-speed-num">18ms</span></span>
        <span class="pc-domain-text">{{ wapurl[currentDomain] }}</span>
        <a :href="wapurlLinks[currentDomain]" target="_blank" class="pc-domain-watch-btn">立即观看</a>
      </div>
      <div class="pc-virus-tip">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于行业原因，本APP被某些杀毒软件认定为病毒<br />
        请大家放心使用本APP含有广告收益，且盈利安装不会对您的手机造成任何损失
      </div>
    </div>
    <div class="pc-right">
      <img :src="banners[currentBanner]" alt="banner" class="pc-banner-bg" />
      <img src="./assets/bottom_mask.png" alt="遮罩" class="pc-banner-mask" />
      <div class="pc-stack-wrap">
        <img src="./assets/free_forever.png" alt="永久免费" class="pc-free-forever" />
        <img src="./assets/pc_grid_mask.png" alt="grid mask" class="pc-girls-pile" />
      </div>
    </div>
  </div>
  <div v-else>
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
          <div class="domain-row-indicator-wrap">
            <div class="domain-row-vertical">
              <span class="speed">测速 <span class="speed-num">129ms</span></span>
              <div class="domain-viewport">
                <div
                  class="domain-list"
                  :style="{
                    transform: `translateY(-${currentDomain * 40}px)`,
                    transition: 'transform 0.4s cubic-bezier(0.55, 0, 0.1, 1)'
                  }"
                >
                  <a
                    v-for="(item, idx) in wapurl"
                    :key="item"
                    class="domain domain-vertical"
                    :href="wapurlLinks[idx]"
                    target="_blank"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              <span class="watch-btn">立即观看</span>
            </div>
            <div class="domain-indicator">
              <span
                v-for="(item, idx) in wapurl"
                :key="item"
                :class="['dot', { active: idx === currentDomain }]"
              ></span>
            </div>
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
.domain-row-indicator-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  justify-content: space-between;
}
.domain-row-vertical {
  background: url('./assets/speed_mask.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.4vw;
  height: 8.24vw;
  width: 100%;
  position: relative;
  border-radius: 1.5vw;
  margin-bottom: 2.4vw;
  overflow: hidden;
}
.speed {
  color: #fff;
  border-radius: 1.6vw;
  padding: 0.27vw 1.33vw;
  font-size: 3.22vw;
  font-weight: normal;
  flex-shrink: 0;
}
.speed-num {
  color: #4caf50;
  font-size: 2.39vw;
  font-weight: normal;
}
.domain-viewport {
  height: 40px;
  overflow: hidden;
  position: relative;
  margin-left: 12vw;
  flex: none;
  display: block;
}
.domain-list {
  display: block;
}
.domain-vertical {
  display: block;
  text-align: left;
  white-space: nowrap;
  color: #fff !important;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0;
  border: none;
  background: none;
  text-decoration: none;
}
.watch-btn {
  background:url('./assets/watch_button.png') no-repeat center center;
  color: #B9050D;
  border-radius: 1.6vw;
  padding: 0.53vw 2.13vw;
  max-height: 15.8vw;
  margin-left: 1vw;
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
  font-size: 2vw;
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
  background: url('./assets/download_btn.png') no-repeat center center;
  background-size: cover;
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
.domain-indicator {
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
  z-index: 10;
  margin-left: 2vw;
  margin-right: -2vw;
  margin-bottom: 1.5vw;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.dot {
  width: 1.3vw;
  height: 1.3vw;
  border-radius: 50%;
  background: #b3c6e0;
  display: block;
  margin: 0.2vw 0;
  transition: background 0.2s;
}
.dot.active {
  background: #1e6fff;
}
@media (min-width: 1024px) {
  .pc-mode {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    width: 100vw;
    background: #000;
    overflow: hidden;
  }
  .pc-left-design {
    width: 50vw;
    min-width: 0;
    max-width: 50vw;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    padding-top: 10%;
    box-sizing: border-box;
    position: relative;
  }
  .pc-logo-title-row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
    justify-content: center;
  }
  .pc-logo-design {
    width: 72px;
    height: 72px;
    border-radius: 16px;
    margin-bottom: 0;
    margin-right: 16px;
  }
  .pc-title-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .pc-app-title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 4px;
    text-align: left;
    letter-spacing: 2px;
  }
  .pc-app-subtitle {
    color: #fff;
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 0;
    text-align: left;
  }
  .pc-main-title {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
    margin-top: 5%;
    text-align: center;
    letter-spacing: 1px;
  }
  .pc-main-desc {
    color: #fff;
    font-size: 18px;
    opacity: 0.9;
    margin-top: 2%;
    margin-bottom: 32px;
    text-align: center;
  }
  .pc-qrcode-design {
    width: 160px;
    height: 160px;
    background: #222;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .pc-qrcode-design img {
    width: 140px;
    height: 140px;
    border-radius: 8px;
  }
  .pc-qrcode-tip {
    color: #fff;
    font-size: 13px;
    opacity: 0.7;
    margin-bottom: 32px;
    text-align: center;
  }
  .pc-domain-bar {
    width: 420px;
    background: #231f32;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 56px;
    margin-bottom: 32px;
    box-sizing: border-box;
    margin-top: 8px;
  }
  .pc-speed {
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-right: 8px;
    line-height: 1.2;
  }
  .pc-speed-num {
    color: #4caf50;
    font-size: 13px;
    font-weight: bold;
    display: block;
  }
  .pc-domain-text {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin: 0 12px;
    flex: 1;
    text-align: center;
    letter-spacing: 1px;
  }
  .pc-domain-watch-btn {
    background: url('./assets/watch_button.png') no-repeat center center;
    color: #B9050D;
    border-radius: 8px;
    font-size: 14px;
    height: 30px;
    width: 100px;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pc-right {
    width: 50vw;
    min-width: 0;
    max-width: 50vw;
    height: 100vh;
    position: relative;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .pc-banner-bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .pc-banner-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 2;
    pointer-events: none;
  }
  .pc-stack-wrap {
    position: absolute;
    left: 50%;
    top: 34vh;
    transform: translateX(-50%);
    width: 620px;
    height: 480px;
    z-index: 3;
    pointer-events: none;
  }
  .pc-free-forever {
    position: absolute;
    left: 50%;
    top: -30px;
    transform: translateX(-50%);
    width: 360px;
    z-index: 2;
  }
  .pc-girls-pile {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 620px;
    z-index: 1;
  }
  .pc-girl-card {
    width: 120px;
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
    background: #333;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    position: relative;
  }
  .pc-girl-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .pc-girl-label {
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background: rgba(0,0,0,0.5);
    padding: 2px 0;
  }
  .pc-topbar {
    position: fixed;
    top: 32px;
    left: 32px;
    z-index: 100;
    display: flex;
    gap: 16px;
  }
  .pc-topbar-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .pc-topbar-btn img {
    height: 40px;
    display: block;
  }
  .pc-virus-tip {
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom:13%;
    margin-left: 15%;
    font-size: 15px;
    z-index: 10;
    pointer-events: none;
  }
}
</style>

<style>
html, body {
  overflow: hidden;
  height: 100%;
}
</style>
