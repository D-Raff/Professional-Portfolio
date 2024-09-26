<template>

  <div id="content">
    <div class="Home">
      <div id="landing" class="landing">
        <div class="background"></div>
        <div class="Animation">
          <div class="char-wrapper">
            <img src="https://iili.io/Jy4RwiJ.png" alt="chibi-img" />
            <div class="suit">
              <img src="https://iili.io/Jy6nlCQ.png" alt="right-a" class="right-a" />
              <img src="https://iili.io/Jy6nG3P.png" alt="left-a" class="left-a" />
              <img src="https://iili.io/Jy4RjVa.png" alt="helmet" data-helmet />
              <img src="https://iili.io/Jy6Ybu2.png" alt="armor" class="armor" loading="eager" />
              <img src="https://iili.io/Jy6n16B.png" alt="left-l" class="left-l" />
              <img src="https://iili.io/Jy6nV8F.png" alt="right-l" class="right-l" />
            </div>
            <div class="block"></div>
          </div>
          <div class="activate">
            <div class="btn-back">
              <div class="spin"></div>
              <button @click="equip()" class="anim">equip</button>
            </div>
          </div>
        </div>
        <div class="welcome">
          <h1 class="head">Hello,</h1>
          <h2 class="name">I'm Damon,</h2>
          <p class="title">
            Aspiring Web Developer, Artist, Software Developer.
          </p>
        </div>
      </div>
    </div>
    <div id="Main">
      <div class="split">
        <div class="open"></div>
        <div class="open2"></div>
      </div>
      <div class="content">
        <div id="About" class="container d-flex pt-5">
          <div class="square">
            <img src="https://iili.io/JhDRlWB.png" class="about-img" alt="profile" />
          </div>
          <div class="square-block"></div>
          <div class="square2">
            <div class="info-text">
              <h2 class="name-head">Damon Raffels</h2>
              <div class="underline"></div>
              <p class="pers-info">
                A versatile developer skilled in both mechanics and fullstack web
                development, with a certificate from Life Choices Coding Academy.
                Proficient in HTML, CSS, Bootstrap, JavaScript, Vue.js, Node.js,
                and MySQL, complemented by badges in Scrum, Cisco Networking, and
                Python Essentials. Past roles provided experience in engine
                rebuilding, overhauling, and inventory management, along with
                strong communication and conflict resolution skills.
              </p>
            </div>
            <p>Hobbies include hiking, gaming, sketching, and coding.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Equip animation

function equip() {
  document.querySelector(".right-a").classList.add("equip-ra");
  document.querySelector(".left-a").classList.add("equip-la");
  document.querySelector(".right-l").classList.add("equip-rl");
  document.querySelector(".left-l").classList.add("equip-ll");
  document.querySelector(".armor").classList.add("armor-equip");
  document.querySelector("[data-helmet]").classList.add("helm-equip");
  document.querySelector(".block").classList.add("cover");
  document.querySelector(".anim").classList.add("arc");
  document.querySelector(".spin").classList.add("flux");
  document.querySelector(".background").classList.add("expand");
  document.querySelector(".head").classList.add("lift-anim");
  document.querySelector(".welcome").classList.add("shrink");
  document.querySelector(".Home").classList.add("scroll");
  useGsap.to("#Main", {
    duration: 1,
    y: 0,
    delay: 2.4,
  });
  setTimeout(() => {
    document.querySelector("#Main").classList.add("display");
  }, "2200");
  setTimeout(() => {
    overlay();
  }, "2800");
  setTimeout(()=> {
    Display()
  }, "3000")
}

function Display() {
    tl.from(".stack-under", { scaleX: '0', duration: .6, delay: 0.5, })
        .from(".skill-info", { y: -200, stagger: 0.2, duration: 0.7, ease: "back" })
    useGsap.from(".skill-img", {
        y: 200,
        stagger: 0.2,
        duration: 0.7,
        ease: "back",
        scrollTrigger: {
            trigger: ".stack-under",
            start: "top 40%",
            end: "top 20%",
            toggleActions: "restart reverse restart reverse",
            markers: {
                startColor: "purple",
                endColor: "red",
                fontSize: "20px"
            }
        }
    })
    Carousel()
}

onMounted(() => {
  useGsap.from(".landing", {
    opacity: 0,
    duration: 1,
  });
  useGsap.from(".Animation", {
    x: 500,
    duration: 1,
    delay: 0.5,
  });
  useGsap.from(".activate", {
    x: 200,
    duration: 1,
    delay: 0.8,
  });
});

function overlay() {
  useGsap.to(".open", {
    duration: 0.5,
    x: -10,
    delay: 0.6,
  });
  useGsap.to(".open", {
    duration: 1,
    x: "-50vw",
    delay: 1.2,
  });
  useGsap.to(".open2", {
    duration: 0.5,
    x: 10,
    delay: 0.6,
  });
  useGsap.to(".open2", {
    duration: 1,
    x: "50vw",
    delay: 1.2,
  });
  useGsap.from(".square", {
    x: -800,
    duration: 1,
    delay: 1.3,
  });
  useGsap.from(".about-img", {
    x: -400,
    duration: 1,
    delay: 1.5,
  });
  useGsap.from(".name-head", {
    x: "20vw",
    duration: 1,
    delay: 1.5,
  });
  useGsap.from(".square2", {
    x: 800,
    duration: 1,
    delay: 1.3,
  });
  useGsap.from(".info-text", {
    x: 400,
    duration: 1,
    delay: 1.5,
  });
}
</script>

<style scoped>
#content {
  display: flex !important;
  flex-direction: column !important;
  width: 100vw;
  overflow-x: hidden;
}

.Home {
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
}

.scroll {
  overflow-y: visible !important;
}

/* font colour and style settings */
.welcome {
  z-index: 0;
  font-family: lora;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4.6rem;
  background: #ffe3e3;
}

.shrink {
  animation: shrink 1s linear forwards;
  background: transparent;
}

.activate {
  display: flex;
  align-self: flex-start;
  left: 20px;
  z-index: 2;
}

.head {
  color: red;
  position: relative;
  font-size: 16rem;
}

.lift-anim {
  animation: lift 1s linear forwards;
}

:is(.title, .name) {
  color: #ffe3e3;
}

.name {
  font-size: 6rem;
  position: relative;
  bottom: 15px;
}

.title {
  font-size: 1rem;
}

.title>span {
  color: red;
}

.disappear {
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #030303;
  display: flex;
  overflow: hidden;
}

.arrow {
  position: relative;
  animation: point 1s infinite;
}

.pers-info {
  color: #ffe3e3;
}

/* main css */
#landing {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #ffe3e3;
}

.background {
  position: absolute;
  background: #030303;
}

.expand {
  animation: dark-mode 2s forwards linear;
}

.Animation {
  /* border: 1px solid blue; */
  display: flex;
  margin-right: 3em;
}

.char-wrapper {
  position: relative;
  width: 250px;
  height: 200px;
  z-index: 1;
}

.anim {
  height: 30px;
  width: 50px;
  border-radius: 10px;
  border: none;
  /* box-shadow: 0px 0px 5px 1px #aa0505; */
  transition: 0.5s;
  /* background-color: #67c7eb; */
  color: #aa0505;
  font-family: "Share Tech Mono", monospace;
  font-weight: bold;
  font-style: normal;
  background-size: 1100%;
  background-position: -229.3px -125px;
  animation: mini-pulse 3s infinite ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arc {
  animation: arc-reactor 2s forwards;
}

.spin {
  position: absolute;
  height: 30px;
  width: 49px;
  border-radius: 50%;
  box-shadow: 0px 0.5px 4px 2px #67c7eb;
}

.flux {
  height: 49px;
  width: 49px;
  animation: flux 0.15s linear infinite;
}

.btn-back {
  height: 49px;
  width: 49px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  z-index: 1;
  position: relative;
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

.block {
  position: relative;
  left: 29%;
  top: 65%;
  width: 40%;
  height: 34%;
  background: transparent;
  z-index: 0;
}

.cover {
  animation: cover 0.5s 1.4s forwards;
}

@keyframes cover {
  90% {
    background: #030303;
  }

  100% {
    background: #030303;
  }
}

/* Glowing Animations */

@keyframes mini-pulse {
  50% {
    border: none;
    box-shadow: 0px 0px 10px 6px #aa0505;
  }
}

@keyframes flux {
  to {
    rotate: 360deg;
  }
}

@keyframes dark-mode {
  0% {
    width: 0%;
    height: 1%;
  }

  20% {
    width: 100%;
    height: 1%;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes point {
  0% {
    right: 0;
  }

  80% {
    right: 40px;
  }

  100% {
    right: 0;
  }
}

@keyframes arc-reactor {
  to {
    background: url("https://iili.io/d9ppT67.png") center no-repeat #67c7eb;
    background-size: 208%;
    background-position: -23.9px -3.8px;
    box-shadow: none;
    animation: none;
    font-size: 0px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
}

/* lift animation for words */
@keyframes lift {
  to {
    font-size: 6rem;
  }
}

@keyframes shrink {
  to {
    top: 1em;
  }
}

/* ============ About Section Styling ============ */

#Main {
  min-height: 100vh;
  width: 100vw;
  background: #030303;
  overflow-x: hidden;
  position: absolute;
  transform: translateY(100vh);
  display: none;
  /* display: flex; */
}

.display {
  display: flex !important;
  flex-direction: column !important;
}

.split {
  display: flex;
  position: absolute;
}

.content {
  height: 100%;
  width: 100%;
  color: #67c7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Electrolize", sans-serif;
}

.open {
  height: 100vh;
  width: 50vw;
  border-right: 2px solid #67c7eb;
  box-shadow: inset -1px 0px 5px 0px #67c7eb;
}

.open2 {
  height: 100vh;
  width: 50vw;
  right: 0px;
  border-left: 2px solid #67c7eb;
  box-shadow: inset 1px 0px 5px 0px #67c7eb;
}

:is(.open, .open2) {
  background-color: #030303;
  position: relative;
}

img[alt="profile"] {
  height: 60vh;
  position: relative;
  bottom: 20.3vh;
  right: 10%;
}

#About {
  align-items: center;
  min-height: 100vh;
}

h2 {
  margin-bottom: 0;
}

.underline {
  border: 2px solid #67c7eb;
  width: 100%;
  margin-bottom: 20px;
}

.square {
  background-color: #ffe3e3;
  height: 350px;
  width: 50%;
  position: absolute;
  z-index: -1;
  transform: translateY(-25%);
  left: 5%;
  display: flex;
  justify-content: center;
  background: url("https://iili.io/d6phWzb.jpg");
  background-position: center;
}

.square-block {
  background-color: #030303;
  height: 50px;
  width: 50%;
  position: absolute;
  z-index: -1;
  transform: translateY(227%);
  left: 5%;
  display: flex;
  justify-content: center;
}

.square2 {
  background-color: #948787;
  height: 350px;
  width: 50%;
  position: absolute;
  z-index: -1;
  transform: translateY(25%);
  right: 5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name-head {
  color: #aa0505;
}
</style>
