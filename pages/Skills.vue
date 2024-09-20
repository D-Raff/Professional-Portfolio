<template>
    <div>
        <!-- <div v-for="skill in skills" :key="skill.title" class="skills-div">
            <img :src="skill.logo" alt="skill-logo">
        </div> -->
    </div>
</template>

<script setup>
    import { useSkillStore } from '~/stores/skills';

    const skillStore = useSkillStore()
    console.log(skillStore.Skills);
    
    onMounted(
        await skillStore.fetchSkills()
    )
</script>

<style scoped>

</style>