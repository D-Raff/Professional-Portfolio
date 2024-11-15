<!-- components/WorkExperience.vue -->
<template>
    <section class="work-experience py-16">
        <h2 class="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div class="container mx-auto px-4">
            <div class="experience-timeline">
                <div v-for="(job, index) in jobs" :key="index" class="experience-item"
                    :class="{ 'right': index % 2 === 0 }" ref="jobCards">
                    <div
                        class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                        <span class="text-sm text-gray-500">{{ job.period }}</span>
                        <h3 class="text-xl font-semibold mt-2">{{ job.title }}</h3>
                        <h4 class="text-lg text-blue-600 mb-3">{{ job.company }}</h4>
                        <p class="text-gray-700">{{ job.description }}</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            <span v-for="(skill, skillIndex) in job.skills" :key="skillIndex"
                                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const jobCards = ref([])

const jobs = [
    {
        period: '2022 - Present',
        title: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        description: 'Leading the frontend development team in building modern web applications using Vue.js and Nuxt.',
        skills: ['Vue.js', 'Nuxt 3', 'TypeScript', 'TailwindCSS']
    },
    {
        period: '2020 - 2022',
        title: 'Frontend Developer',
        company: 'Digital Innovations',
        description: 'Developed responsive web applications and implemented complex animations.',
        skills: ['JavaScript', 'Vue.js', 'GSAP', 'CSS3']
    },
    // Add more jobs as needed
]

onMounted(() => {
    jobCards.value.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
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
.work-experience {
    background-color: #030303;
}

.experience-timeline {
    position: relative;
}

.experience-timeline::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #e2e8f0;
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