<template>
    <div class="project-carousel">
        <div class="head">
            <h1 class="title">Projects
                <section class="stack-under-projects"></section>
            </h1>
        </div>

        <div class="container">
            <div class="slide" v-if="projects && projects.length > 0">
                <div v-for="(project, index) in projects" :key="project.id || index" class="item"
                    :style="`background-image: url('${project.image}')`">
                    <div class="content">
                        <div class="name">{{ project.name }}</div>
                        <div class="des">
                            {{ project.description }}
                        </div>
                        <div class="buttons">
                            <a class="seeMore" target="_blank" :href="project.link">
                                <button>Site</button>
                            </a>
                            <a class="seeMore" target="_blank" :href="project.gitHub">
                                <button>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide" v-else>
                <div class="item">
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
    const carousel = document.querySelector(".project-carousel");
    if (!carousel) return;
    
    const next = carousel.querySelector(".next");
    const prev = carousel.querySelector(".prev");

    if (next) {
        next.addEventListener("click", function () {
            const slide = carousel.querySelector(".slide");
            const items = slide ? slide.querySelectorAll(".item") : [];
            if (slide && items.length > 0) {
                // Hide all content first - only within the carousel
                const allContent = slide.querySelectorAll(".item .content");
                allContent.forEach(content => {
                    content.style.display = "none";
                });

                // Move the first item to the end
                slide.appendChild(items[0]);

                // Show content for the new active item (second item)
                setTimeout(() => {
                    const newActiveContent = slide.querySelector(".item:nth-child(2) .content");
                    if (newActiveContent) {
                        newActiveContent.style.display = "block";
                    }
                }, 50);
            }
        });
    }

    if (prev) {
        prev.addEventListener("click", function () {
            const slide = carousel.querySelector(".slide");
            const items = slide ? slide.querySelectorAll(".item") : [];
            if (slide && items.length > 0) {
                // Hide all content first - only within the carousel
                const allContent = slide.querySelectorAll(".item .content");
                allContent.forEach(content => {
                    content.style.display = "none";
                });

                // Move the last item to the beginning
                slide.prepend(items[items.length - 1]);

                // Show content for the new active item (second item)
                setTimeout(() => {
                    const newActiveContent = slide.querySelector(".item:nth-child(2) .content");
                    if (newActiveContent) {
                        newActiveContent.style.display = "block";
                    }
                }, 50);
            }
        });
    }
});
</script>

<style scoped>
.head {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 100px;
    color: whitesmoke;
}

.stack-under-projects {
    border: #67c7eb 1px solid;
    width: 100%;
    box-shadow: #67c7eb 0px 0px 5px 2px;
}

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
    border: 1px solid #67c7eb;
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
    left: 50px;
    width: 300px;
    text-align: left;
    color: #eee;
    transform: translate(0, -50%);
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
    opacity: 1;
    color: #67c7eb;
    animation: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
}

.project-carousel .content .des {
    width: 100%;
    /* margin-top: 10px; */
    margin-bottom: 20px;
    margin-right: 5px;
    opacity: 1;
    color: #DAA520;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: electrolize;
    animation: none;
}

.project-carousel .content button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    opacity: 1;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.673);
    transition: all 0.5s;
    animation: none;
}

:is(.name, .des) {
    background: rgba(0, 0, 0, 0.5);
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

.project-carousel .buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.project-carousel .next {
    padding: 0 0 0 3px;
}

.project-carousel .prev {
    padding: 0 3px 0 0;
}
</style>