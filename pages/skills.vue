<template>
    <div class="carousel-wrapper" >
        <h1>Skills Preview</h1>
        <div class="skill-carousel">
            {{ skillsStore.skills }}
        </div>

    </div>
</template>

<script setup>
import { useSkillsStore } from '~/stores/skills';

const skillsStore = useSkillsStore()
console.log(skillsStore.skills);


</script>

<style scoped>

</style>