<template>
    <div id="work-projects">
        <section class="work-experience py-16">
            <div class="head">
                <h1 class="title">Work & Projects
                    <section class="stack-under-work"></section>
                </h1>
            </div>
            <div class="container mx-auto px-4">
                <div class="experience-timeline">
                    <div v-for="(item, index) in workProjects" :key="index" class="experience-item"
                        :class="{ 'right': index % 2 === 0 }" ref="jobCards">
                        <div
                            class="main-card p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                            <span class="timeframe text-sm text-gray-500">{{ item.year }}</span>
                            <h3 class="place text-xl font-semibold mt-2">{{ item.place }}
                                <section class="stack-under-work"></section>
                            </h3>
                            <h4 class="desc mb-3">{{ item.description }}</h4>
                            <div class="skill-wrapper d-flex flex-wrap">
                                <span v-for="(skill, skillIndex) in item.skills" :key="skillIndex" class="work-skill">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="projects py-16">
            <ProjectCardComponent />
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const Store = useStore()
await Store.fetchWork()
let workProjects = Store.work
await Store.fetchProjects()
let projects = Store.projects

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
})

</script>

<style scoped>
#work-projects {
    min-height: fit-content;
    padding-top: 80px;
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

.title {
    font-size: 100px;
    color: whitesmoke;
}

:is(.stack-under, .stack-under-work, .stack-under-projects) {
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

.projects{
    min-height: 50vh;
}
</style>
