<!-- components/WorkExperience.vue -->
<template>
    <section class="work-experience py-16">
        <div class="head">
            <h1 class="title">Work Experience
                <section class="stack-under"></section>
            </h1>
        </div>

        <div class="container mx-auto px-4">
            <div class="experience-timeline">
                <div v-for="(job, index) in work" :key="place" class="experience-item"
                    :class="{ 'right': index % 2 === 0 }" ref="jobCards">
                    <div
                        class="main-card p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                        <span class="text-sm text-gray-500">{{ job.year }}</span>
                        <h3 class="text-xl font-semibold mt-2">{{ job.place }}</h3>
                        <h4 class="text-blue-600 mb-3">{{ job.description }}</h4>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
const Store = useStore()
await Store.fetchWork()
let work = Store.work

const jobCards = ref([])

function underline_work() {
    useGsap.from(".stack-under", {
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
.head{
    display: flex;
    justify-content: center;
}

.work-experience {
    background-color: #030303;
    min-height: fit-content;
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
    background-color: #030303;
    color: #3b82f6;
    box-shadow: #3b82f6 0px 0px 5px 2px;
    padding: 1rem;
    border-radius: 10px;
}

.skill-wrapper {
    gap: 1em;
}

.work-skill {
    background-color: #3b82f6;
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
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