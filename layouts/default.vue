<template>
    <div id="default-layout">
        <!-- Tony Stark Inspired Fixed Navigation -->
        <nav id="stark-nav" class="stark-navigation">
            <div class="nav-container">
                <div class="nav-brand">
                    <div class="brand-logo">
                        <div class="logo-core"></div>
                        <div class="logo-ring"></div>
                    </div>
                    <span class="brand-text">DAMON</span>
                </div>
                
                <div class="nav-links">
                    <a href="#home" class="nav-link" data-text="HOME" @click.prevent="scrollToSection('home')">
                        <span class="link-text">HOME</span>
                        <div class="link-glow"></div>
                    </a>
                    <a href="#work-projects" class="nav-link" data-text="WORK & PROJECTS" @click.prevent="scrollToSection('work-projects')">
                        <span class="link-text">WORK & PROJECTS</span>
                        <div class="link-glow"></div>
                    </NuxtLink>
                    <NuxtLink to="/Contact-me" class="nav-link" data-text="CONTACT ME">
                        <span class="link-text">CONTACT ME</span>
                        <div class="link-glow"></div>
                    </NuxtLink>
                    <div class="nav-indicator">
                        <div class="indicator-line"></div>
                    </div>
                </div>
            </div>
        </nav>  
        <div id="Displayed-page">
            <div id="home">
                <IndexPage />
            </div>
            <div id="work-projects">
                <WorkProjectsPage />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onUnmounted } from 'vue'

/*===================== Navigation Animations =====================*/
// let tl = useGsap.timeline()

onMounted(() => {
    // Check if we're on the index page - if not, show navigation immediately
    const route = useRoute()
    const nav = document.querySelector('.stark-navigation')
    
        if (route.path !== '/') {
        if (nav) {
            nav.style.opacity = '1'
            nav.style.transform = 'translateY(0)'
            nav.style.visibility = 'visible'
            nav.style.borderBottom = 'none'
        }
    }
    
    // Scroll-based transparency for navigation
    const handleScroll = () => {
        if (!nav) return
        
        const scrollY = window.scrollY || window.pageYOffset
        const scrollThreshold = 50 // Change this value to adjust when transparency kicks in
        
        if (scrollY > scrollThreshold) {
            // Scrolled down - make transparent
            nav.style.background = 'rgba(10, 10, 10, 0.1)'
            nav.style.backdropFilter = 'blur(10px)'
            nav.style.borderBottom = 'none'
        } else {
            // At top - make opaque/black
            nav.style.background = 'rgba(10, 10, 10, 0.95)'
            nav.style.backdropFilter = 'blur(20px)'
            nav.style.borderBottom = 'none'
        }
    })
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Check initial scroll position
    handleScroll()
    
    // Cleanup on unmount
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    
    // Initialize navigation animations
    const navLinks = document.querySelectorAll('.nav-link')
    const brandLogo = document.querySelector('.brand-logo')
    
    // Brand logo hover effects
    if (brandLogo) {
        // Continuous rotation for logo-ring
        useGsap.to(brandLogo.querySelector('.logo-ring'), {
            rotation: 360,
            duration: 3,
            ease: "none",
            repeat: -1
        })
        
        brandLogo.addEventListener('mouseenter', () => {
            useGsap.to(brandLogo.querySelector('.logo-core'), {
                scale: 1.2,
                duration: 0.3,
                ease: "power2.out"
            })
        })
        
        brandLogo.addEventListener('mouseleave', () => {
            useGsap.to(brandLogo.querySelector('.logo-core'), {
                scale: 1,
                duration: 0.3,
                ease: "power1.out"
            })
        })
        
        // Make brand logo clickable to go home
        brandLogo.addEventListener('click', () => {
            scrollToSection('home')
        })
        
        // Add cursor pointer style
        brandLogo.style.cursor = 'pointer'
    }
    
    // Navigation link hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            useGsap.to(link.querySelector('.link-glow'), {
                opacity: 1,
                scale: 1.2,
                duration: 0.3,
                ease: "power2.out"
            })
            
            useGsap.to(link.querySelector('.link-text'), {
                y: -2,
                duration: 0.3,
                ease: "power2.out"
            })
        })
        
        link.addEventListener('mouseleave', () => {
            useGsap.to(link.querySelector('.link-glow'), {
                opacity: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            })
            
            useGsap.to(link.querySelector('.link-text'), {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        })
        
    })
    
    // Active link indicator
    const updateActiveIndicator = () => {
        const activeLink = document.querySelector('.nav-link.router-link-exact-active')
        const navIndicator = document.querySelector('.nav-indicator')
        if (activeLink && navIndicator) {
            const linkRect = activeLink.getBoundingClientRect()
            const navRect = document.querySelector('.nav-links').getBoundingClientRect()
            const leftOffset = linkRect.left - navRect.left
            const linkWidth = linkRect.width
            
            useGsap.to(navIndicator, {
                left: leftOffset,
                width: linkWidth,
                duration: 0.5,
                ease: "power2.out"
            })
        }
    }
    
    window.addEventListener('scroll', handleScroll)
    updateActiveIndicator()
})

</script>

<style scoped>
#default-layout {
    min-height: 100vh;
    width: 100vw;
    background: #0a0a0a;
    padding: 0;
    position: relative;
    font-family: 'Electrolize', monospace;
}

/* Fixed Navigation Bar */
.stark-navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    z-index: 1000;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.8s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease;
    visibility: hidden;
}

.stark-navigation.nav-visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    border-bottom: none;
}

.nav-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

/* Brand Logo */
.nav-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.brand-logo {
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-core {
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #00d4ff, #3461e8);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
    position: relative;
    z-index: 2;
}

.logo-ring {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(52, 97, 232, 0.6);
    border-radius: 50%;
    border-top-color: transparent;
    border-right-color: transparent;
}

.brand-text {
    color: #00d4ff;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

/* Navigation Links */
.nav-links {
    display: flex;
    align-items: center;
    gap: 3rem;
    position: relative;
    padding-bottom: 2px;
}

.nav-link {
    position: relative;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
    transition: left 0.5s ease;
}

.nav-link:hover::before {
    left: 100%;
}

.link-text {
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
}

.link-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1;
}

/* Active Link Styling */
.nav-link.active {
    color: #00d4ff !important;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
}

.nav-link.active .link-glow {
    opacity: 0.3;
}

/* Active Indicator */
.nav-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    transition: all 0.5s ease;
}

.indicator-line {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #00d4ff, #3461e8);
    border-radius: 1px;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
}

/* Page Content */
#Displayed-page {
    width: 100%;
    min-height: 100vh;
    background: #0a0a0a;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
}

#Displayed-page > div {
    width: 100%;
    scroll-margin-top: 80px;
    position: relative;
}

#home {
    position: relative;
    z-index: 1;
}

#work-projects {
    position: relative;
    z-index: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
    .stark-navigation {
        padding: 0 1rem;
        height: 70px;
    }
    
    .nav-links {
        gap: 1.5rem;
    }
    
    .nav-link {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
    
    .brand-text {
        font-size: 1.2rem;
    }
    
    #Displayed-page {
        padding-top: 70px;
    }
}

/* Glow Effects */
@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
    }
    50% {
        box-shadow: 0 0 30px rgba(0, 212, 255, 0.9);
    }
}

.logo-core {
    animation: pulse-glow 2s ease-in-out infinite;
}
</style>