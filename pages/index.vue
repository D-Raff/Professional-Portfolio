<template>
  <div id="landing">
    <div class="char-wrapper">
      <img src="https://iili.io/Jy4RwiJ.png" alt="chibi-img"/>
      <div class="suit">
        <img src="https://iili.io/Jy6nlCQ.png" alt="right-a" class="limb" />
        <img src="https://iili.io/Jy6nG3P.png" alt="left-a" class="limb" />
        <img src="https://iili.io/Jy4RjVa.png" alt="helmet" data-helmet />
        <img src="https://iili.io/Jy6Ybu2.png" alt="armor" class="armor" />
        <img src="https://iili.io/Jy6n16B.png" alt="left-l" class="limb" />
        <img src="https://iili.io/Jy6nV8F.png" alt="right-l" class="limb" />
      </div>
      <div class="block"></div>
    </div>
    <button @click="equip()" class="anim" >equip</button>
  </div>
  <div id="about"></div>
</template>

<script setup>
function equip() {
  document.querySelectorAll("img.limb").forEach(function (elem) {
    elem.classList.add("play-animation");
  });
  document.querySelector(".armor").classList.add("play-animation2");
  document.querySelector("[data-helmet]").classList.add("helm-equip");
  document.querySelector(".block").classList.add("cover");
}
</script>

<style scoped>
#landing {
  min-height: 100vh;
  width: 100vw;
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
  height: 30px;
  width: 80px;
  border-radius: 7px;
  border: none;
  box-shadow: 0px 0px 3px 3px #8bd3fb;
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

/* armor euip animation */

@keyframes equip {
  from {
    visibility: hidden;
    transform: translatey(400px);
  }
  to {
    visibility: visible;
    transform: translatey(0px);
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
.play-animation {
  animation: equip 1s ease-in forwards;
}
.play-animation2 {
  animation: equip 0.5s ease-in forwards;
}
.helm-equip {
  animation: helm-equip 1s 1s 1 ease-in forwards;
}

/* blocking bottom half of body to only display head */
.block{
  position: relative;
  top: 64%;
  width: 100%;
  height: 36%;
  background: transparent;
  z-index: 0;
}
.cover{
  animation: cover 0.5s 0.8s forwards
}
@keyframes cover {
  90%{
    background: white;
  }
  100%{
    background: white;
  }
}
</style>
