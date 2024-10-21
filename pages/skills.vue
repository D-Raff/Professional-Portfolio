<template>
    <div id="Skills">
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
</template>

<script setup>
// import the store for data pulling
// import { useSkillsStore } from '~/stores/skills';

const skillsStore = useSkillsStore()
await skillsStore.fetchSkills()
let skills = skillsStore.skills



// create a variable for the timeline function of gsap
// const tl = useGsap.timeline()

function Carousel() {
    let skillCarousel = document.querySelectorAll(".skill-carousel")
    let skillCarouselWrapper = document.querySelector(".skill-carousel")
    useGsap.to(skillCarousel, {
        x: (skillCarouselWrapper.clientWidth) * -1,
        duration: 18,
        repeat: -1,
        ease: 'none',
    })
}

onMounted(() => {
    useGsap.from(".skill-img", {
        y: 200,
        stagger: 0.2,
        duration: 0.5,
        ease: "back",
        scrollTrigger: {
            trigger: ".carousel-wrapper",
            start: "top 40%",
            end: "top 21%",
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
)

</script>

<style scoped>
#Skills {
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    background: #030303;
    justify-content: center;
    align-items: center;
}

.carousel-wrapper {
    display: flex;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    border: 3px solid red;
}

.skill-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
}

.skill-img {
    width: 150px;
    margin: 20px;
    object-fit: cover;
}
</style>