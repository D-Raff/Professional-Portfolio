<template>
    <div id="Navigation" class="container">
        <div id="main-nav" class="container">
            <button @click="menu()">Navigation menu</button>
        </div>
        <NuxtLink to="/" class="nav-item1">Home Page</NuxtLink>
        <NuxtLink to="/main" class="nav-item2">main</NuxtLink>
        <NuxtLink to="/skills" class="nav-item3">Skills and Experience</NuxtLink>
    </div>

    <div>
        <NuxtPage />
    </div>
</template>

<script setup>
// Import the skills store
import { useSkillsStore } from '~/stores/skills';
// import { watchEffect } from 'vue';

// Fetch the skills data globally in layout
const skillsStore = useSkillsStore();
await skillsStore.fetchSkills();

// watch effect is a reactive fucntion that constantly checks for a specififc parameter to be true or fals
// watchEffect(() => {
//     if (useRoute().path == "/skills") {  // Check if the skills page is loaded
//         useGsap.from(".skill-img", {
//             y: 200,
//             stagger: 0.2,
//             duration: 0.5,
//             ease: "back",
//             scrollTrigger: {
//                 trigger: ".carousel-wrapper",
//                 start: "top 40%",
//                 end: "top 21%",
//                 toggleActions: "restart reverse restart reverse",
//                 markers: true,
//             }
//         });
//         console.log("on the skills page");
//         ;  // Trigger the GSAP animation when skills are updated and rendered
//     }
// });

function menu(){
    useGsap.to(".nav-item1",{
        x: -150,
        y: -100
    })
    useGsap.to("#main-nav",{
        background: "blue"
    })
}

</script>

<style scoped>
.router-link-exact-active {
    color: red;
}

#Navigation {
    border: 3px solid red;
    width: 250px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    background: black;
    padding: 0;
    z-index: 1;
}

#main-nav{
    border: 3px blue solid;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
}

:is(.nav-item1, .nav-item2, .nav-item3) {
    border: 3px red solid;
    position: absolute;
    border-radius: 50%;
    height: 150px !important;
    width: 150px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 0;
}
</style>