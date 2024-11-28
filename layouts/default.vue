<template>
    <div id="Navigation" class="container">
        <div id="main-nav" class="container">
            <p data-nav>Navigation</p>
        </div>
        <NuxtLink to="/" class="nav-item1">Home</NuxtLink>
        <NuxtLink to="/skills" class="nav-item3">Skills and Experience</NuxtLink>
    </div>

    <div>
        <NuxtPage />
    </div>

    <div class="blur"></div>
</template>

<script setup>
// Import the store. the store is being imported here but used on other pages
// import { useStore } from '~/stores/skills';
// import { watchEffect, ref } from 'vue';


/*===================== variables =====================*/
let tl = useGsap.timeline()

// watch effect is a reactive fucntion that constantly checks for a specififc parameter to be true or false
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

/*===================== functions =====================*/
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
    useGsap.to("#Navigation", {
        height: "200px",
        width: "200px",
    })
}


onMounted(() => {
    let menuItem = document.querySelectorAll('[class^="nav-item"]')
    let NavHover = document.querySelector('#Navigation')

    NavHover.addEventListener('mouseenter', () => {
        tl.to(".nav-item1", {
            x: -130,
            y: 10,
            duration: .13,
            ease: "back"
        })
            .to(".nav-item2", {
                x: -95,
                y: -88,
                duration: .13,
                ease: "back"
            })
            .to(".nav-item3", {
                x: 0,
                y: -130,
                duration: .13,
                ease: "back"
            })
        useGsap.to("#Navigation", {
            height: "270px",
            width: "270px",
            duration: .5,
            ease: "back",
        })
        useGsap.to(".blur", {
            display: "block",
            backdropFilter: 'blur(5px)',
            duration: 0.3,
            ease: "power2.inOut"
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
        useGsap.to("#Navigation", {
            height: "200px",
            width: "200px",
        })
        useGsap.to(".blur", {
            backdropFilter: 'blur(0px)',
            duration: 0.5,
            ease: "power2.inOut",
            display: "none"
        });
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
    width: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: transparent;
    padding: 0;
    margin: 20px;
    z-index: 1;
}

#main-nav {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #030303;
    border: #3461e8 2px solid;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
}

:is(.nav-item1, .nav-item2, .nav-item3) {
    border: 3px #3461e8 solid;
    text-decoration: none;
    position: absolute;
    border-radius: 50%;
    height: 90px !important;
    width: 90px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 0;
    background: #030303;
}

[data-nav] {
    color: #67c7eb;
    position: relative;
    padding: 0;
    z-index: 100;
}

.blur {
    height: 100vh;
    width: 100vw;
    background: transparent;
    position: fixed;
    top: 0;
    display: none;
}
</style>