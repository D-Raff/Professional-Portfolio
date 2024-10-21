<template>
    <div class="Nav">
        <p>Navigation menu</p>
        <NuxtLink to="/">Home Page</NuxtLink>
        <NuxtLink to="/skills">Skills and Experience</NuxtLink>
        <NuxtLink to="/main">main</NuxtLink>
    </div>

    <div>
        <NuxtPage :key="$route.fullPath" />
    </div>
</template>

<script setup>
// Import the skills store
import { useSkillsStore } from '~/stores/skills';
import { watchEffect } from 'vue';

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

</script>

<style scoped>
.router-link-exact-active {
    color: red;
}
</style>