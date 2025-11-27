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
                {{ aboutText }}
              </p>
            </div>
          </div>
        </div>

        <div id="Skills" class="container-fluid">
          <h1 class="title-skills">
            Tech Stack
            <section class="stack-under"></section>
          </h1>
          <div class="skill-info">
            With an evergrowing interest in more technologies and languages, I have an ever expanding library of
            skills.
            <section>I have beginner - intermediate skills with these languages and tools</section>
          </div>
          <div class="carousel-wrapper container">
            <div class="skill-carousel">
              <div v-for="skill in skills" :key="skill.title">
                <img :src="skill.logo" alt="skill-logo" class="skill-img">
              </div>
            </div>
            <div class="skill-carousel">
              <div v-for="skill in skills" :key="skill.title">
                <img :src="skill.logo" alt="skill-logo" class="skill-img">
              </div>
            </div>
          </div>
        </div>
        <div id="Badges">

          <div class="badge-showcase container-fluid">
            <div class="badge-wrapper container">
              <div class="badges card" v-for="badge in badges" :key="badge.title">
                <div class="card-body">
                  <img :src="badge.badge" alt="badge" data-badge>
                </div>
                <div class="card-footer">
                  {{ badge.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, computed } from 'vue'

const Store = useStore()
await Store.fetchAbout()

// Format about data for display - reference Store.about directly for reactivity
const aboutText = computed(() => {
  const about = Store.about
  if (!about) return ''
  if (Array.isArray(about)) {
    // If it's an array of objects with a text property
    if (about[0] && typeof about[0] === 'object' && about[0].text) {
      return about[0].text
    }
    // If it's an array of strings, join them
    if (typeof about[0] === 'string') {
      return about.join(' ')
    }
    // Otherwise return first element
    return about[0]
  }
  return about
})
await Store.fetchSkills()
let skills = Store.skills
await Store.fetchBadges()
let badges = Store.badges

// Check if animation has already been played in this session
const hasAnimationPlayed = ref(false)

// Store ScrollTrigger instances for cleanup
let scrollTriggers = []

function Carousel() {
  let skillCarousel = document.querySelectorAll(".skill-carousel")
  let skillCarouselWrapper = document.querySelector(".carousel-wrapper")

  if (skillCarouselWrapper && skillCarousel.length > 0 && skillCarouselWrapper.clientWidth > 0) {
    useGsap.to(skillCarousel, {
      x: (skillCarouselWrapper.clientWidth) * -1,
      duration: 18,
      repeat: -1,
      ease: 'none',
    })
  }
}
function Img_Animation(){
  // Skill images animation
  const skillImgTween = useGsap.to(".skill-img", {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 0.5,
    delay: .5,
    ease: "back",
    scrollTrigger: {
      trigger: ".carousel-wrapper",
      start: "top 60%",
      end: "top 15%",
      toggleActions: "restart reverse restart reverse",
    }
  })
  
  // Store ScrollTrigger instance for cleanup and refresh
  if (skillImgTween.scrollTrigger) {
    scrollTriggers.push(skillImgTween.scrollTrigger)
  }
}
function underline() {
  try {
    // Register ScrollTrigger plugin
    const { ScrollTrigger } = useGsap
    useGsap.registerPlugin(ScrollTrigger)

    const stackUnderTween = useGsap.to(".stack-under", {
      scaleX: 1,
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".carousel-wrapper",
        start: "top 60%",
        end: "top 15%",
        toggleActions: "restart reverse restart reverse",
      }
    })

    const skillInfoTween = useGsap.to(".skill-info", {
      scaleY: 1,
      stagger: .2,
      duration: .7,
      ease: "back",
      delay: .5,
      scrollTrigger: {
        trigger: ".carousel-wrapper",
        start: "top 60%",
        end: "top 15%",
        toggleActions: "restart reverse restart reverse",
      }
    })

    // Store ScrollTrigger instances for cleanup
    if (stackUnderTween.scrollTrigger) {
      scrollTriggers.push(stackUnderTween.scrollTrigger)
    }
    if (skillInfoTween.scrollTrigger) {
      scrollTriggers.push(skillInfoTween.scrollTrigger)
    }
  } catch (error) {
    console.error('SkillsComponent: Error in underline function:', error)
  }
}

function hover_badge() {
  useGsap.utils.toArray(".card").forEach(card => {
    const cardBody = card.querySelector(".card-body");

    if (!cardBody) return; // Ensure .card-body exists inside .card

    card.addEventListener("mouseenter", () => {
      useGsap.to(cardBody, {
        top: 0, // Lifting effect
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    });

    card.addEventListener("mouseleave", () => {
      useGsap.to(cardBody, {
        top: "3rem", // Reset position
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    });
  });
}

// Reset animation state when component is unmounted
onUnmounted(() => {
  resetAnimationState()
  // Clean up scroll prevention event listeners
  enableScrolling()
})

// Check sessionStorage on component mount
onMounted(() => {
  // Always reset the animation state first
  resetAnimationState()

  const animationPlayed = sessionStorage.getItem('mainAnimationPlayed')

  if (!animationPlayed) {
    // First time loading - play the full animation sequence
    hasAnimationPlayed.value = false
    // Prevent scrolling until equip button is clicked
    preventScrolling()
    playInitialAnimations()
    // ScrollTriggers will be created after equip animation completes
  } else {
    // Animation already played - skip to main content
    hasAnimationPlayed.value = true
    skipToMainContent()
    // Enable scrolling since animation was already played
    enableScrolling()
    // Note: initializeScrollTriggers() is called in skipToMainContent()
  }
  hover_badge()
  Carousel()
  // Note: underline() and Img_Animation() are now called in initializeScrollTriggers()
})

function resetAnimationState() {
  // Reset all animation classes and styles
  const elementsToReset = [
    '.right-a', '.left-a', '.right-l', '.left-l', '.armor', '[data-helmet]',
    '.block', '.anim', '.spin', '.background', '.head', '.welcome', '.Home',
    '#Main', '.open', '.open2'
  ]

  elementsToReset.forEach(selector => {
    const element = document.querySelector(selector)
    if (element) {
      // Remove all animation classes
      element.className = element.className.replace(/equip-\w+|armor-equip|helm-equip|cover|arc|flux|expand|lift-anim|shrink|scroll|display/g, '')

      // Reset specific styles
      if (selector === '#Main') {
        element.style.transform = 'translateY(100vh)'
        // element.style.display = 'none'
      }
      if (selector === '.open' || selector === '.open2') {
        element.style.transform = 'translateX(0)'
      }
    }
  })
}

function playInitialAnimations() {
  // Ensure landing section is visible
  const landingSection = document.querySelector(".Home")
  if (landingSection) {
    landingSection.style.display = "block"
  }

  // Ensure main section is hidden initially
  // const mainSection = document.querySelector("#Main")
  // if (mainSection) {
  //   mainSection.style.display = "none"
  // }

  // Hide split divs initially
  const openDivs = document.querySelectorAll(".open, .open2")
  openDivs.forEach(div => {
    div.style.display = "block"
  })

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
}

function skipToMainContent() {
  // Hide the landing section completely
  const landingSection = document.querySelector(".Home")
  if (landingSection) {
    landingSection.style.display = "none"
  }

  // Immediately show the main content without animation
  const mainSection = document.querySelector("#Main")
  if (mainSection) {
    mainSection.classList.add("display");
    mainSection.style.transform = "translateY(0)";
    mainSection.style.display = "flex";
  }

  // Hide the split divs
  const openDivs = document.querySelectorAll(".open, .open2")
  openDivs.forEach(div => {
    div.style.display = "none"
  })
  
  // Initialize ScrollTriggers after layout is set
  // Wait a bit longer since we're skipping animation
  setTimeout(() => {
    initializeScrollTriggers()
  }, 300)

  // Show navigation immediately
  useGsap.to(".stark-navigation", {
    opacity: 1,
    y: 0,
    visibility: "visible",
    duration: 0.8,
    ease: "power2.out"
  });

  // Start logo animations
  useGsap.to('.logo-core', {
    scale: 1.1,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });

  useGsap.to('.logo-ring', {
    rotation: 360,
    duration: 8,
    ease: "none",
    repeat: -1
  });

  // Show about section immediately
  useGsap.from(".square", {
    x: -800,
    duration: 1,
  });
  useGsap.from(".about-img", {
    x: -400,
    duration: 1,
  });
  useGsap.from(".name-head", {
    x: "20vw",
    duration: 1,
  });
  useGsap.from(".square2", {
    x: 800,
    duration: 1,
  });
  useGsap.from(".info-text", {
    x: 400,
    duration: 1,
  });
}

// Function to reset animation (for testing - can be called from browser console)
function resetAnimation() {
  sessionStorage.removeItem('mainAnimationPlayed')
  location.reload()
}

// Make resetAnimation available globally for testing
if (process.client) {
  window.resetAnimation = resetAnimation
}

// Prevent scrolling
function preventScrolling() {
  // Prevent scroll on body and html
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  
  // Also prevent scroll with touch events (mobile)
  document.addEventListener('touchmove', preventDefault, { passive: false })
  document.addEventListener('wheel', preventDefault, { passive: false })
  document.addEventListener('scroll', preventDefault, { passive: false })
}

// Enable scrolling
function enableScrolling() {
  // Re-enable scroll on body and html
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
  
  // Remove scroll prevention event listeners
  document.removeEventListener('touchmove', preventDefault)
  document.removeEventListener('wheel', preventDefault)
  document.removeEventListener('scroll', preventDefault)
}

// Prevent default for scroll events
function preventDefault(e) {
  e.preventDefault()
}

// Initialize ScrollTriggers after layout is finalized
function initializeScrollTriggers() {
  // Wait a bit to ensure layout is stable
  setTimeout(() => {
    const carouselWrapper = document.querySelector(".carousel-wrapper")
    if (!carouselWrapper) {
      console.warn('Carousel wrapper not found, retrying...')
      setTimeout(initializeScrollTriggers, 200)
      return
    }
    
    // Check if carousel has dimensions
    if (carouselWrapper.offsetWidth === 0 || carouselWrapper.offsetHeight === 0) {
      console.warn('Carousel has no dimensions, retrying...')
      setTimeout(initializeScrollTriggers, 200)
      return
    }
    
    // Now create ScrollTriggers
    underline()
    Img_Animation()
    
    // Refresh ScrollTrigger to ensure proper initialization
    const { ScrollTrigger } = useGsap
    if (ScrollTrigger && ScrollTrigger.refresh) {
      ScrollTrigger.refresh()
    }
  }, 100)
}

// Equip animation
function equip() {
  // Mark animation as played in session storage
  sessionStorage.setItem('mainAnimationPlayed', 'true')
  
  // Enable scrolling when equip button is clicked
  enableScrolling()

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
    onComplete: () => {
      // Initialize ScrollTriggers after Main div animation completes
      // This ensures ScrollTriggers are created with correct positions
      initializeScrollTriggers()
    }
  });
  useGsap.to(".spin", {
    height: '49px',
    duration: 2,
  });
  setTimeout(() => {
    document.querySelector("#Main").classList.add("display");
  }, "2200");
  setTimeout(() => {
    overlay();
  }, "2800");
}

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
  // Show navigation after open1 and open2 animations complete (2.2 seconds)
  useGsap.to(".stark-navigation", {
    opacity: 1,
    y: 0,
    visibility: "visible",
    duration: 0.8,
    delay: 2.2,
    ease: "power2.out"
  });
  // Start logo animations after nav appears
  useGsap.to('.logo-core', {
    scale: 1.1,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    delay: 2.2
  });

  useGsap.to('.logo-ring', {
    rotation: 360,
    duration: 8,
    ease: "none",
    repeat: -1,
    delay: 2.2
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
  display: flex;
  flex-direction: column;
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
  display: flex;
  margin-right: 3em;
}

.char-wrapper {
  position: relative;
  width: 250px;
  height: 200px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}

.anim {
  height: 30px;
  width: 50px;
  border-radius: 10px;
  border: none;
  transition: 0.5s;
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
  animation: flux 0.15s linear infinite 1s;
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
  perspective: 1000px;
  z-index: 1;
  justify-content: center;
  align-items: center;
}

img[alt="chibi-img"] {
  width: 298px;
  position: absolute;
}

img[alt="helmet"] {
  height: 190px;
  width: 290px;
  position: relative;
  bottom: 3.6em;
  right: 1.7em;
  z-index: 4;
  visibility: hidden;
}

img[alt="right-a"] {
  height: 50px;
  width: 30px;
  position: relative;
  top: 8.3em;
  right: 1.7em;
  z-index: 3;
  visibility: hidden;
}

img[alt="left-a"] {
  height: 50px;
  width: 30px;
  position: relative;
  top: 8.3em;
  left: .4em;
  visibility: hidden;
}

img[alt="armor"] {
  height: 190px;
  width: 450px;
  position: relative;
  bottom: 11.3em;
  right: 6.8em;
  z-index: 2;
  visibility: hidden;
}

img[alt="left-l"] {
  height: 40px;
  width: 35px;
  position: relative;
  bottom: 17em;
  left: 1.5em;
  z-index: 1;
  visibility: hidden;
}

img[alt="right-l"] {
  height: 40px;
  width: 35px;
  position: relative;
  bottom: 16.9em;
  right: 2.9em;
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
  left: 0%;
  top: 35%;
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
    /* background: red; */
    background: #030303;
  }

  100% {
    /* background: red; */
    background: #030303;
  }
}

/* Glowing Animations */

@keyframes mini-pulse {
  50% {
    border: none;
    box-shadow: 0px 0px 10px 6px #aa0505, inset 0px 0px 1.5px 1px #aa0505;
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
  /* display: none; */
  /* display: flex; */
}

.display {
  display: flex !important;
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
  z-index: 999;
}

img[alt="profile"] {
  height: 120%;
  position: relative;
  bottom: 10%;
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
  height: 100px;
  width: 50%;
  position: relative;
  z-index: -1;
  transform: translateY(227%);
  bottom: 90px;
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

/* ===================== skills section ===================== */

#Skills {
  font-family: "Share Tech Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-block: 100px;
  height: fit-content;
}

.skill-info {
  font-family: electrolize;
  color: #67c7eb;
  text-align: center;
}

.carousel-wrapper {
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: 15rem;
}

.skill-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-img {
  height: 150px;
  aspect-ratio: 1/1;
  margin: 20px;
  object-fit: contain;
  box-shadow: inset #67c7eb 0 0 10px 1px;
  border-radius: 10px;
  padding: 10px;
}

.title-skills {
  font-size: 100px;
  color: whitesmoke;
}

:is(.stack-under, .stack-under-work) {
  border: #67c7eb 1px solid;
  width: 100%;
  box-shadow: #67c7eb 0px 0px 5px 2px;
  transform: scaleX(0);
  transform-origin: left;
}

.skill-info {
  transform: scaleY(0);
  transform-origin: top;
}

.skill-img {
  transform: translateY(200px);
  opacity: 0;
}

/* ############################ Badge Section ############################ */


#Badges {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100vw;
  padding-block: 10px;
  overflow: hidden;
}


img[data-badge] {
  height: 200px;
  margin: 30px
}

.badge-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  padding: 20px;
}

.badge-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 2rem;
  position: relative;
}

.card {
  background: #1C1C1C;
  color: #67c7eb;
  border: none;
  width: 20rem;
  height: 300px;
  position: relative;
  align-items: center;
  background: transparent;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset #67c7eb 0 0 10px 1px;
  position: relative;
  top: 3rem;
  width: 100%;
  z-index: 1;
  background: #242424;
}

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #67c7eb;
  text-align: center;
  border: 3px solid;
  width: 100%;
  z-index: 0;
  border-radius: 10px;
  margin: 2px;
}
</style>