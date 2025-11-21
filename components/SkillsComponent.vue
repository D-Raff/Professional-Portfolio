<template>
    <div id="Skills" class="container-fluid">
        <h1 class="title-skills">
            Tech Stack
            <section class="stack-under"></section>
        </h1>
        <p class="skill-info">
            With an evergrowing interest in more technologies and languages, I have an ever expanding library of
            skills.
        <section>I have beginner - intermediate skills with these languages and tools</section>
        </p>
        <div class="carousel-wrapper container">
            <div class="skill-carousel">
                <div v-for="skill in skills" :key="skill.title">
                    <img :src="skill.logo" alt="skill-logo" class="skill-img">
                </div>
            </div>
            <div class="skill-carousel">
                <div v-for="skill in skills" :key="skill.title">
                    <img :src="skill.logo" alt="skill-logo" class="skill-img">
                </div>
            </div>
        </div>
    </div>
    <div id="Badges">

        <div class="badge-showcase container-fluid">
            <div class="badge-wrapper container">
                <div class="badges card" v-for="badge in badges" :key="badge.title">
                    <div class="card-body">
                        <img :src="badge.badge" alt="badge" data-badge>
                    </div>
                    <div class="card-footer">
                        {{ badge.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { nextTick, onUnmounted } from 'vue'

const Store = useStore()
await Store.fetchSkills()
let skills = Store.skills
await Store.fetchBadges()
let badges = Store.badges

// Store ScrollTrigger instances for cleanup
let scrollTriggers = []

function Carousel() {
    let skillCarousel = document.querySelectorAll(".skill-carousel")
    let skillCarouselWrapper = document.querySelector(".carousel-wrapper")

    if (skillCarouselWrapper && skillCarousel.length > 0 && skillCarouselWrapper.clientWidth > 0) {
        useGsap.to(skillCarousel, {
            x: (skillCarouselWrapper.clientWidth) * -1,
            duration: 18,
            repeat: -1,
            ease: 'none',
        })
    }
}

function underline() {
    try {
        // Register ScrollTrigger plugin
        const { ScrollTrigger } = useGsap
        useGsap.registerPlugin(ScrollTrigger)
        
        const stackUnderTween = useGsap.to(".stack-under", {
            scaleX: 1,
            stagger: 0.2,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".carousel-wrapper",
                start: "top 60%",
                end: "top 15%",
                toggleActions: "restart reverse restart reverse",
            }
        })
        
        const skillInfoTween = useGsap.to(".skill-info", {
            scaleY: 1, 
            stagger: .2, 
            duration: .7, 
            ease: "back", 
            delay: .5,
            scrollTrigger: {
                trigger: ".carousel-wrapper",
                start: "top 60%",
                end: "top 15%",
                toggleActions: "restart reverse restart reverse",
            }
        })
        
        // Store ScrollTrigger instances for cleanup
        if (stackUnderTween.scrollTrigger) {
            scrollTriggers.push(stackUnderTween.scrollTrigger)
        }
        if (skillInfoTween.scrollTrigger) {
            scrollTriggers.push(skillInfoTween.scrollTrigger)
        }
    } catch (error) {
        console.error('SkillsComponent: Error in underline function:', error)
    }
}

function hover_badge() {
    useGsap.utils.toArray(".card").forEach(card => {
        const cardBody = card.querySelector(".card-body");

        if (!cardBody) return; // Ensure .card-body exists inside .card

        card.addEventListener("mouseenter", () => {
            useGsap.to(cardBody, {
                top: 0, // Lifting effect
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        });

        card.addEventListener("mouseleave", () => {
            useGsap.to(cardBody, {
                top: "3rem", // Reset position
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        });
    });
}

onMounted(async () => {
    // Wait for data to be loaded and DOM to be ready
    await nextTick()

    // Add a small delay to ensure everything is rendered
    setTimeout(() => {
        try {
            // Only run animations if data is available
            if (skills && skills.length > 0) {
                // Register ScrollTrigger plugin
                const { ScrollTrigger } = useGsap
                useGsap.registerPlugin(ScrollTrigger)
                
                // Check if elements exist before animating
                const carouselWrapper = document.querySelector(".carousel-wrapper")
                
                if (!carouselWrapper) {
                    return
                }
                
                underline()
                Carousel()

                // Skill images animation
                const skillImgTween = useGsap.to(".skill-img", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.5,
                    delay: .5,
                    ease: "back",
                    scrollTrigger: {
                        trigger: ".carousel-wrapper",
                        start: "top 60%",
                        end: "top 15%",
                        toggleActions: "restart reverse restart reverse",
                    }
                })
                
                // Store ScrollTrigger instance for cleanup
                if (skillImgTween.scrollTrigger) scrollTriggers.push(skillImgTween.scrollTrigger)
                
                // Refresh ScrollTrigger to ensure proper initialization
                if (ScrollTrigger && ScrollTrigger.refresh) {
                    ScrollTrigger.refresh()
                }
                
                // Listen for custom refresh event (triggered when Main div animation completes)
                const handleRefreshEvent = () => {
                    if (ScrollTrigger && ScrollTrigger.refresh) {
                        // Force a more aggressive refresh
                        // First, scroll to top to ensure accurate calculations
                        const currentScroll = window.scrollY || window.pageYOffset
                        window.scrollTo(0, 0)
                        
                        requestAnimationFrame(() => {
                            // Force layout recalculation
                            if (carouselWrapper) {
                                carouselWrapper.offsetHeight
                                carouselWrapper.getBoundingClientRect()
                            }
                            
                            // Refresh all ScrollTriggers
                            ScrollTrigger.refresh()
                            
                            // Also refresh individual instances
                            scrollTriggers.forEach(st => {
                                if (st && st.refresh) {
                                    st.refresh()
                                }
                            })
                            
                            // Update ScrollTrigger
                            ScrollTrigger.update()
                            
                            // Scroll back to original position
                            window.scrollTo(0, currentScroll)
                            
                            // Final update
                            requestAnimationFrame(() => {
                                ScrollTrigger.update()
                            })
                        })
                    }
                }
                window.addEventListener('scrolltrigger-refresh', handleRefreshEvent)
                
                // Store handler for cleanup
                scrollTriggers.refreshHandler = handleRefreshEvent
            }
        } catch (error) {
            console.error('SkillsComponent: Error initializing animations:', error)
        }
    }, 100)

    hover_badge()
})

// Cleanup ScrollTrigger instances when component is unmounted
onUnmounted(() => {
    try {
        const { ScrollTrigger } = useGsap
        scrollTriggers.forEach(trigger => {
            if (trigger && trigger.kill) {
                trigger.kill()
            }
        })
        scrollTriggers = []
        
        // Remove refresh event listener
        if (scrollTriggers.refreshHandler) {
            window.removeEventListener('scrolltrigger-refresh', scrollTriggers.refreshHandler)
        }
        
        if (ScrollTrigger && ScrollTrigger.refresh) {
            ScrollTrigger.refresh()
        }
    } catch (error) {
        console.error('SkillsComponent: Error during cleanup:', error)
    }
})
</script>

<style scoped>
/* ===================== skills section ===================== */

#Skills {
    font-family: "Share Tech Mono", monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-block: 100px;
    height: fit-content;
}

.skill-info {
    font-family: electrolize;
    color: #67c7eb;
    text-align: center;
}

.carousel-wrapper {
    display: flex;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
}

.skill-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
}

.skill-img {
    height: 150px;
    aspect-ratio: 1/1;
    margin: 20px;
    object-fit: contain;
    box-shadow: inset #67c7eb 0 0 10px 1px;
    border-radius: 10px;
    padding: 10px;
}

.title-skills {
    font-size: 100px;
    color: whitesmoke;
}

:is(.stack-under, .stack-under-work) {
    border: #67c7eb 1px solid;
    width: 100%;
    box-shadow: #67c7eb 0px 0px 5px 2px;
    transform: scaleX(0);
    transform-origin: left;
}

.skill-info {
    transform: scaleY(0);
    transform-origin: top;
}

.skill-img {
    transform: translateY(200px);
    opacity: 0;
}

/* ############################ Badge Section ############################ */


#Badges {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    width: 100vw;
    padding-block: 10px;
    overflow: hidden;
}


img[data-badge] {
    height: 200px;
    margin: 30px
}

.badge-showcase {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    position: relative;
    padding: 20px;
}

.badge-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    padding: 2rem;
    position: relative;
}

.card {
    background: #1C1C1C;
    color: #67c7eb;
    border: none;
    width: 20rem;
    height: 300px;
    position: relative;
    align-items: center;
    background: transparent;
}

.card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: inset #67c7eb 0 0 10px 1px;
    position: relative;
    top: 3rem;
    width: 100%;
    z-index: 1;
    background: #242424;
}

.card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #67c7eb;
    text-align: center;
    border: 3px solid;
    width: 100%;
    z-index: 0;
    border-radius: 10px;
    margin: 2px;
}
</style>
