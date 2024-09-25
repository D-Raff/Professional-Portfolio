<template>
    <div class="skills container-fluid d-flex">
        <h1>Tech Stack <section class="stack-under"></section>
        </h1>
        <p class="skill-info">
            With an evergrowing interest in more technologies and languages, I have an ever expanding library of skills
            <section>{add beginner - mid-level experience}</section>
        </p>
        <div class="carousel-wrapper container d-flex">
            <div class="skill-carousel d-flex">
                <div v-for="skill in skills" :key="skill.title" class="skills-div">
                    <img :src="skill.logo" alt="skill-logo" class="skill-img">
                </div>
            </div>
            <div class="skill-carousel d-flex">
                <div v-for="skill in skills" :key="skill.title" class="skills-div">
                    <img :src="skill.logo" alt="skill-logo" class="skill-img">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSkillStore } from '~/stores/skills';

const skillStore = useSkillStore()
await skillStore.fetchSkills()
let skills = skillStore.Skills

function Carousel() {
    let skillCarousel = document.querySelectorAll(".skill-carousel")
    let skillCarouselWrapper = document.querySelector(".skill-carousel")
    useGsap.to(skillCarousel, {
        x: (skillCarouselWrapper.clientWidth) * -1,
        duration: 15,
        delay: 2.5,
        repeat: -1,
        ease:'none'
    })
}


onMounted(
    () => {
        useGsap.from(".skill-img", {
            y: 200,
            stagger: 0.2,
            duration: 0.7,
            ease: "back",
            delay: 1
        })
        useGsap.from(".skill-info", {
            y: -200,
            stagger: 0.2,
            duration: 0.7,
            ease: "back",
            delay: .5,
        })
        useGsap.from(".stack-under", {
            scaleX: '0',
            duration: .6,
            delay: 0.5
        })
        Carousel()
    }
)
</script>

<style scoped>
.skills {
    font-family: "Share Tech Mono", monospace;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
    background-color: #030303;
}

.skill-info{
    font-family: Electrolize;
    color: #67c7eb;
}

.skill-carousel {
    height: 210px;
    align-items: center;
}

.carousel-wrapper {
    height: 210px;
    align-items: center;
    overflow: hidden;
}

img[alt="skill-logo"] {
    height: 160px;
    aspect-ratio: 1/1;
    margin: 10px;
    /* box-shadow: inset #67c7eb 0 0 30px 9px; */
    /* border-radius: 10px; */
}

h1 {
    font-size: 100px;
    color: #aa0505;
    overflow: hidden;
}

.stack-under {
    border: #67c7eb 1px solid;
    width: 100%;
    box-shadow: #67c7eb 0px 0px 5px 2px;
}
</style>