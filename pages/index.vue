<template>
  <div id="landing">
  <div class="Animation">
    <div class="char-wrapper">
      <img src="https://iili.io/Jy4RwiJ.png" alt="chibi-img"/>
      <div class="suit">
        <img src="https://iili.io/Jy6nlCQ.png" alt="right-a" class="right-a" />
        <img src="https://iili.io/Jy6nG3P.png" alt="left-a" class="left-a" />
        <img src="https://iili.io/Jy4RjVa.png" alt="helmet" data-helmet />
        <img src="https://iili.io/Jy6Ybu2.png" alt="armor" class="armor" />
        <img src="https://iili.io/Jy6n16B.png" alt="left-l" class="left-l" />
        <img src="https://iili.io/Jy6nV8F.png" alt="right-l" class="right-l" />
      </div>
      <div class="block"></div>
    </div>
    <button @click="equip()" class="anim" >equip</button>
  </div>
  </div>

  <div id="about"></div>
</template>

<script setup>
function equip() {
  document.querySelector(".right-a").classList.add("equip-ra");
  document.querySelector(".left-a").classList.add("equip-la");
  document.querySelector(".right-l").classList.add("equip-rl");
  document.querySelector(".left-l").classList.add("equip-ll");
  document.querySelector(".armor").classList.add("armor-equip");
  document.querySelector("[data-helmet]").classList.add("helm-equip");
  document.querySelector(".block").classList.add("cover");
}
</script>

<style scoped>
#landing {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Animation{
  border: 1px solid blue;
  display: flex;
}
.char-wrapper {
  position: relative;
  border: 1px solid red;
  width: 300px;
  height: 200px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  }
  
  .anim{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 5px 1px #aa0505;
  transition: 0.5s;
  /* color: #67c7eb; */
  color: #aa0505;
  font-family: "Share Tech Mono", monospace;
  font-weight: bold;
  font-style: normal;
  background: url("https://iili.io/d9ppT67.png") center no-repeat;
  background-size: 201%;
  background-position: -22.6px -3.3px;
  animation: mini-pulse 4s infinite ease;
}

/* working on the suit placement */

.suit {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0.2em;
  perspective: 1000px;
  z-index: 1;
}
img[alt="chibi-img"] {
  width: 298px;
  position: absolute;
}
img[alt="helmet"] {
  height: 190px;
  width: 290px;
  position: relative;
  bottom: 4.2em;
  right: 0.5em;
  z-index: 4;
  visibility: hidden;
}
img[alt="right-a"] {
  height: 50px;
  width: 30px;
  position: relative;
  top: 8em;
  left: 5.7em;
  z-index: 3;
  visibility: hidden;
}
img[alt="left-a"] {
  height: 50px;
  width: 30px;
  position: relative;
  top: 7.6em;
  left: 7.5em;
  visibility: hidden;
}
img[alt="armor"] {
  height: 190px;
  width: 450px;
  position: relative;
  bottom: 12em;
  right: 5.5em;
  z-index: 2;
  visibility: hidden;
}
img[alt="left-l"] {
  height: 40px;
  width: 35px;
  position: relative;
  bottom: 17.9em;
  left: 8.7em;
  z-index: 1;
  visibility: hidden;
}
img[alt="right-l"] {
  height: 40px;
  width: 35px;
  position: relative;
  bottom: 17.9em;
  left: 4.1em;
  z-index: 2;
  rotate: -3deg;
  visibility: hidden;
}

/* armor equip animation */

@keyframes equip-ra {
  from {
    visibility: hidden;
    transform: translatez(900px);
  }
  to {
    visibility: visible;
    transform: translatez(0px);
  }
}
@keyframes equip-rl {
  from {
    visibility: hidden;
    transform: translatez(900px);
  }
  to {
    visibility: visible;
    transform: translatez(0px);
  }
}
@keyframes equip-la {
  from {
    visibility: hidden;
    transform: translatez(900px);
  }
  to {
    visibility: visible;
    transform: translatez(0px);
  }
}
@keyframes equip-ll {
  from {
    visibility: hidden;
    transform: translatez(900px);
  }
  to {
    visibility: visible;
    transform: translatez(0px);
  }
}
@keyframes equip-armor {
  from {
    visibility: hidden;
    transform: translatez(900px);
  }
  to {
    visibility: visible;
    transform: translatez(0px);
  }
}
@keyframes helm-equip {
  from {
    visibility: hidden;
    transform: translatey(-200px);
  }
  to {
    visibility: visible;
    transform: translatey(0px);
  }
}
@keyframes disappear {
  99% {
    opacity: 0%;
  }
  100% {
    opacity: 0%;
  }
}
.equip-suit {
  z-index: 6;
}
.equip-la {
  animation: equip-la 0.8s ease-in forwards;
}
.equip-ll {
  animation: equip-ll 0.8s 0.3s ease-in forwards;
}
.armor-equip {
  animation: equip-armor 0.5s 0.5s ease-in forwards;
}
.equip-ra {
  animation: equip-ra 0.8s 0.6s ease-in forwards;
}
.equip-rl {
  animation: equip-rl 0.8s 0.7s ease-in forwards;
}
.helm-equip {
  animation: helm-equip 0.8s 1.2s 1 ease-in forwards;
}

/* blocking bottom half of body to only display head */

.block{
  /* border: 3px solid red; */
  position: relative;
  top: 65%;
  width: 100%;
  height: 34%;
  background: transparent;
  z-index: 0;
}
.cover{
  animation: cover 0.5s 1.2s forwards
}
@keyframes cover {
  90%{
    background: white;
  }
  100%{
    background: white;
  }
}

/* Glowing Animations */

@keyframes mini-pulse {
  50%{
    border: none;
    box-shadow: 0px 0px 10px 1px #aa0505;
  }
}

</style>
