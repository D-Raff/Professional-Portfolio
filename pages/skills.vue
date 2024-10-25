<template>
    <div id="Skills" class="container-fluid">
        <h1>
            Tech Stack
            <section class="stack-under"></section>
        </h1>
        <p class="skill-info">
            With an evergrowing interest in more technologies and languages, I have an ever expanding library of skills
        <section>I have beginner - intermediate skills with these languages and tools</section>
        </p>
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
// skillstore is being imported in the default layout which is loaded first
const skillsStore = useSkillsStore()
await skillsStore.fetchSkills()
let skills = skillsStore.skills



// create a variable for the timeline function of gsap
const tl = useGsap.timeline()

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

function underline() {
    useGsap.from(".stack-under", {
        scaleX: 0,
        stagger: 0.2,
        duration: 0.5,
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
    useGsap.from(".skill-info", { scaleY: '0', stagger: .2, duration: .7, ease: "back", delay: .5,
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
}

onMounted(() => {
    underline()
    useGsap.from(".skill-img", {
        y: 200,
        stagger: 0.2,
        duration: 0.5,
        delay: .5,
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
    font-family: "Share Tech Mono", monospace;
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    background: #030303;
    justify-content: center;
    align-items: center;
}

.skill-info {
    font-family: Electrolize;
    color: #67c7eb;
    text-align: center;
}

.carousel-wrapper {
    display: flex;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
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

h1 {
    font-size: 100px;
    color: #aa0505;
}

.stack-under {
    border: #67c7eb 1px solid;
    width: 100%;
    box-shadow: #67c7eb 0px 0px 5px 2px;
}
</style>