<template>
    <div class="project-carousel">
        <h1>
            Projects
        </h1>
        <div class="container">
        <div class="slide" v-if="projects && projects.length > 0">
            <div 
                v-for="(project, index) in projects" 
                :key="project.id || index" 
                class="item" 
                :style="`background-image: url('${project.image}')`"
            >
                <div class="content">
                    <div class="name">{{ project.name}}</div>
                    <div class="des">
                        {{ project.description}}
                    </div>
                    <a class="seeMore" target="_blank" :href="project.url || project.link || project.github || '#'">
                        <button>See More</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="slide" v-else>
            <div class="item" style="background-image: url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                <div class="content">
                    <div class="name">No Projects Yet</div>
                    <div class="des">
                        Projects will be displayed here once they are added to the data source.
                    </div>
                    <a class="seeMore" target="_blank" href="#">
                        <button>Coming Soon</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="button">
            <button class="prev">◁</button>
            <button class="next">▷</button>
        </div>
    </div>
        <div class="MDJAminDiv">
            <a class="MDJAmin" href="https://github.com/MDJAmin" target="_blank">MDJAmin</a>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

const Store = useStore()
await Store.fetchProjects()
let projects = Store.projects || []

// Debug: Log projects data
console.log('ProjectCardComponent - Projects data:', projects)
console.log('ProjectCardComponent - Projects length:', projects.length)

onMounted(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (next) {
        next.addEventListener("click", function () {
            const items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            if (slide && items.length > 0) {
                slide.appendChild(items[0]);
            }
        });
    }

    if (prev) {
        prev.addEventListener("click", function () {
            const items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            if (slide && items.length > 0) {
                slide.prepend(items[items.length - 1]);
            }
        });
    }
});
</script>

<style scoped>
.project-carousel * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.project-carousel .container {
    position: relative;
    width: 800px;
    height: 400px;
    background: #f5f5f5;
    box-shadow: 0 30px 50px #dbdbdb;
    border-radius: 20px;
    margin: 2rem auto;
}

.project-carousel .container .slide {
    border-radius: 20px;
}

.project-carousel .container .slide .item {
    width: 200px;
    height: 250px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 20px;
    box-shadow: 0 30px 50px #505050;
    background-position: 50% 50%;
    background-size: cover;
    display: inline-block;
    transition: all 0.5s;
}

.project-carousel .slide .item:nth-child(1),
.project-carousel .slide .item:nth-child(2) {
    top: 0;
    left: 0;
    transform: translate(0, 0);
    border-radius: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: all .5s;
}

.project-carousel .slide .item:nth-child(3) {
    left: 50%;
}

.project-carousel .slide .item:nth-child(4) {
    left: calc(50% + 220px);
}

.project-carousel .slide .item:nth-child(5) {
    left: calc(50% + 440px);
}

.project-carousel .slide .item:nth-child(n + 6) {
    left: calc(50% + 660px);
    opacity: 0;
}

.project-carousel .item .content {
    position: absolute;
    top: 50%;
    left: 100px;
    width: 300px;
    text-align: left;
    color: #eee;
    transform: translate(0, -50%);
    font-family: system-ui;
    display: none;
}

.project-carousel .slide .item:nth-child(2) .content {
    display: block;
}

.project-carousel .content .name {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Share Tech Mono", monospace;
    opacity: 0;
    animation: animate 1s ease-in-out 1 forwards;
    color: #67c7eb;
}

.project-carousel .content .des {
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 5px;
    /* opacity: 0; */
    animation: animate 1s ease-in-out 0.3s 1 forwards;
    color: #DAA520;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
    font-family: electrolize;
}

.project-carousel .content button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    opacity: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.673);
    transition: all 0.5s;
    animation: animate 1s ease-in-out 0.6s 1 forwards;
}

.project-carousel .content button:hover {
    background-color: rgb(255, 255, 255);
}

@keyframes animate {
    from {
        opacity: 0;
        transform: translate(0, 100px);
        filter: blur(33px);
    }

    to {
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}

.project-carousel .button {
    display: flex;
    flex-direction: row;
    gap: 20px;
    left: 45%;
    right: 50%;
    width: 100%;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 20px;
}

.project-carousel .button button {
    width: 40px;
    height: 35px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin: 0 5px;
    border: 2px solid #000000bd;
    transition: 0.3s;
    background: rgba(255, 255, 255, 0.578);
}

.project-carousel .button button:hover {
    color: #000000;
    border: 2px solid #ffffffbd;
    transform: scale(1.1);
}

.project-carousel .button button:focus {
    transform: scale(1.1);
    background: #ffffff;
    border: 2px solid #ffffffbd;
}

.project-carousel .button button:active {
    transform: scale(1.02);
}

.project-carousel .next {
    padding: 0 0 0 3px;
}

.project-carousel .prev {
    padding: 0 3px 0 0;
}

.project-carousel .MDJAminDiv {
    z-index: 4444;
    position: fixed;
    bottom: 5%;
    left: 2%;
}

.project-carousel .MDJAmin {
    text-decoration: none;
    border-bottom: 1px dashed rgb(44, 44, 44);
    border-top: 1px dashed rgb(44, 44, 44);
    padding: 4px 0;
    color: rgba(44, 44, 44, 0.525);
    font-family: monospace;
    font-style: italic;
    font-size: 1.1em;
    transition: all 0.5s;
}

.project-carousel .MDJAmin:hover {
    color: #000000;
}
</style>