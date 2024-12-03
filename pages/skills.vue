<template>
    <div id="work-skills">
        <section class="work-experience py-16">
            <div class="head">
                <h1 class="title">Work Experience
                    <section class="stack-under-work"></section>
                </h1>
            </div>
            <div class="container mx-auto px-4">
                <div class="experience-timeline">
                    <div v-for="(job, index) in work" :key="place" class="experience-item"
                        :class="{ 'right': index % 2 === 0 }" ref="jobCards">
                        <div
                            class="main-card p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                            <span class="timeframe text-sm text-gray-500">{{ job.year }}</span>
                            <h3 class="place text-xl font-semibold mt-2">{{ job.place }}
                                <section class="stack-under-work"></section>
                            </h3>
                            <h4 class="desc mb-3">{{ job.description }}</h4>
                            <div class="skill-wrapper d-flex flex-wrap">
                                <span v-for="(skill, skillIndex) in job.skills" :key="skillIndex" class="work-skill">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="Skills" class="container-fluid">
            <h1 class="title">
                Tech Stack
                <section class="stack-under"></section>
            </h1>
            <p class="skill-info">
                With an evergrowing interest in more technologies and languages, I have an ever expanding library of skills.
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
    </div>
</template>

<script setup>
// skillstore is being imported in the default layout which is loaded first
import { ref, onMounted } from 'vue'
const Store = useStore()
await Store.fetchSkills()
await Store.fetchWork()
let skills = Store.skills
let work = Store.work

const jobCards = ref([])



// create a variable for the timeline function of gsap
// const tl = useGsap.timeline()

function underline_work() {
    useGsap.from(".stack-under-work", {
        scaleX: 0,
        stagger: 0.2,
        duration: 0.5,
    })
}

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
            start: "top 50%",
            end: "top 21%",
            toggleActions: "restart reverse restart reverse",
            // markers: {
            //     startColor: "purple",
            //     endColor: "red",
            //     fontSize: "20px"
            // }
        }
    })
    useGsap.from(".skill-info", {
        scaleY: '0', stagger: .2, duration: .7, ease: "back", delay: .5,
        scrollTrigger: {
            trigger: ".carousel-wrapper",
            start: "top 50%",
            end: "top 21%",
            toggleActions: "restart reverse restart reverse",
            // markers: {
            //     startColor: "purple",
            //     endColor: "red",
            //     fontSize: "20px"
            // }
        }
    })
}

onMounted(() => {
    underline_work()
    jobCards.value.forEach((card, index) => {
        useGsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            boxShadow: "none",
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
        })
    })
    underline()
    useGsap.from(".skill-img", {
        y: 200,
        stagger: 0.2,
        duration: 0.5,
        delay: .5,
        ease: "back",
        scrollTrigger: {
            trigger: ".carousel-wrapper",
            start: "top 50%",
            end: "top 21%",
            toggleActions: "restart reverse restart reverse",
            // markers: {
            //     startColor: "purple",
            //     endColor: "red",
            //     fontSize: "20px"
            // }
        }
    })
    Carousel()
})

</script>

<style scoped>
#work-skills{
    min-height: fit-content;
    width: 100vw;
    background: fixed radial-gradient(circle at center,
            #242424 0%,
            #1c1c1c 30%,
            #171717 60%,
            #111111 85%,
            #030303 100%);
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3);
}
.head {
    display: flex;
    justify-content: center;
}

.work-experience {
    min-height: fit-content;
    font-family: "Share Tech Mono", monospace;
}

.experience-timeline {
    position: relative;
}

.experience-timeline::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #67c7eb;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.experience-item {
    padding: 2rem 0;
    width: 50%;
    position: relative;
}

.experience-item::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #3b82f6;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.experience-item.right {
    margin-left: 50%;
    padding-left: 2rem;
}

.experience-item.right::before {
    left: -8px;
}

.experience-item:not(.right) {
    padding-right: 2rem;
}

.experience-item:not(.right)::before {
    right: -8px;
}

.main-card {
    /* border: #3b82f6 3px solid; */
    background: #1C1C1C;
    color: #67c7eb;
    padding: 1rem;
    border-radius: 10px;
}

.skill-wrapper {
    gap: 1em;
}

.work-skill {
    background-color: #DAA520;
    /* box-shadow: inset #DAA520 0 0 5px 5px; */
    color: #1C1C1C;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
}

.place {
    color: #DAA520;
}

.desc {
    font-size: medium;
    font-family: electrolize;
}

/* ===================== skills section ===================== */

#Skills {
    font-family: "Share Tech Mono", monospace;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
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

.title {
    font-size: 100px;
    color: whitesmoke;
}

:is(.stack-under, .stack-under-work) {
    border: #67c7eb 1px solid;
    width: 100%;
    box-shadow: #67c7eb 0px 0px 5px 2px;
}

@media (max-width: 768px) {
    .experience-timeline::before {
        left: 0;
    }

    .experience-item {
        width: 100%;
        margin-left: 0;
        padding-left: 2rem;
    }

    .experience-item::before {
        left: -8px;
    }

    .experience-item.right {
        margin-left: 0;
    }

}
</style>