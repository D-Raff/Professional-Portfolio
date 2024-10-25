<template>
    <div id="Navigation" class="container">
        <div id="main-nav" class="container">
        </div>
        <NuxtLink to="/" class="nav-item1">Home</NuxtLink>
        <NuxtLink to="/main" class="nav-item2">main</NuxtLink>
        <NuxtLink to="/skills" class="nav-item3">Skills and Experience</NuxtLink>
    </div>

    <div>
        <NuxtPage />
    </div>
</template>

<script setup>
// Import the skills store
import { useSkillsStore } from '~/stores/skills';
// import { ref } from 'vue';
// import { watchEffect } from 'vue';

// Fetch the skills data globally in layout
const skillsStore = useSkillsStore();
await skillsStore.fetchSkills();
// let OnOff = ref()
let tl = useGsap.timeline()


// watch effect is a reactive fucntion that constantly checks for a specififc parameter to be true or fals
// watchEffect(() => {
//     if (OnOff.value === true) {
//         useGsap.to(".nav-item1", {
//             x: -130,
//             y: 10,
//             duration: .4,
//             ease: "back"
//         })
//         useGsap.to(".nav-item2", {
//             x: -95,
//             y: -88,
//             duration: .4,
//             ease: "back"
//         })
//         useGsap.to(".nav-item3", {
//             x: 0,
//             y: -130,
//             duration: .4,
//             ease: "back"
//         })
//         useGsap.to("#main-nav", {
//             background: "blue"
//         })
//     } else if (OnOff.value === false) {
//         tl.to(".nav-item1", {
//             x: 0,
//             y: 0,
//             duration: .15,
//             ease: "in"
//         })
//         tl.to(".nav-item2", {
//             x: 0,
//             y: 0,
//             duration: .15,
//             ease: "in"
//         })
//         tl.to(".nav-item3", {
//             x: 0,
//             y: 0,
//             duration: .15,
//             ease: "in"
//         })
//             .to("#main-nav", {
//                 background: "red"
//             })
//     }
// })


function menu() {
    tl.to(".nav-item1", {
        x: 0,
        y: 0,
        duration: .15,
        ease: "in"
    })
    tl.to(".nav-item2", {
        x: 0,
        y: 0,
        duration: .15,
        ease: "in"
    })
    tl.to(".nav-item3", {
        x: 0,
        y: 0,
        duration: .15,
        ease: "in"
    })
        .to("#main-nav", {
            background: "red"
        })
}

onMounted(() => {
    let menuItem = document.querySelectorAll('[class^="nav-item"]')
    let NavHover = document.querySelector('#Navigation')

    NavHover.addEventListener('mouseenter', () => {
        useGsap.to(".nav-item1", {
            x: -130,
            y: 10,
            duration: .4,
            ease: "back"
        })
        useGsap.to(".nav-item2", {
            x: -95,
            y: -88,
            duration: .4,
            ease: "back"
        })
        useGsap.to(".nav-item3", {
            x: 0,
            y: -130,
            duration: .4,
            ease: "back"
        })
        useGsap.to("#Navigation", {
            height: "270px",
            width: "270px"
        })
    })
    NavHover.addEventListener('mouseleave', () => {
        tl.to(".nav-item1", {
            x: 0,
            y: 0,
            duration: .13,
            ease: "in"
        })
        tl.to(".nav-item2", {
            x: 0,
            y: 0,
            duration: .13,
            ease: "in"
        })
        tl.to(".nav-item3", {
            x: 0,
            y: 0,
            duration: .13,
            ease: "in"
        })
            .to("#Navigation", {
                height: "200px",
                width: "200px"
            })
    })


    menuItem.forEach(Nav => {
        Nav.addEventListener('click', () => {
            menu()
        })
    });
})




</script>

<style scoped>
.router-link-exact-active {
    color: red;
}

#Navigation {
    width: 200px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    background: transparent;
    padding: 0;
    z-index: 1;
}

#main-nav {
    border: 3px blue solid;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
}

:is(.nav-item1, .nav-item2, .nav-item3) {
    border: 3px red solid;
    position: absolute;
    border-radius: 50%;
    height: 90px !important;
    width: 90px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 0;
}
</style>