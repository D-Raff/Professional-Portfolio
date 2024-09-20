<template>
    <div>
        <div v-for="skill in skills" :key="skill.title" class="skills-div">
            <img :src="skill.logo" alt="skill-logo">
        </div>
    </div>
</template>

<script setup>
    const {data: backend} = await useFetch("https://d-raff.github.io/VueJS-Portfolio-data/data/");
    // let skills = backend.skills
    console.log(backend)
</script>

<style scoped>

</style>