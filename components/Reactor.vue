<template>
    <div class="reactor-container">
        <div class="jarv-container">
                <div class="stat circ"></div>
                <div class="outerm circ"></div>
                <div class="out circ"></div>
                <div class="mid circ"></div>
                <div class="mid2 circ"></div>
                <div class="mid3 circ"></div>
                <div class="in circ"></div>
                <div class="inmost3 circ"></div>
                <div class="inmost2 circ"></div>
                <div class="inmost circ"></div>
            </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.reactor-container {
    min-height: fit-content;
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.jarv-container {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    animation: fade 3s;
}

.circ {
    border-radius: 50%;
    aspect-ratio: 1/1;
    position: absolute;
}

.stat {
    position: relative;
    height: 80%;
    border: 25px solid #0088ff;
}

.outerm {
    width: 30%;
    border: 20px solid rgba(0, 0, 0, 0);
    border-bottom: 20px solid #0088ff;
    border-left: 20px solid #0088ff;
    animation: jarv 5s linear infinite;
}

.out {
    width: 29.5%;
    border: 10px solid #0088ff;
}

.mid {
    width: 20%;
    border: 32px solid rgba(0, 0, 0, 0);
    border-bottom: 32px solid #005aa8;
    animation: jarv2 3.5s linear infinite reverse;
}

.mid2 {
    width: 20%;
    border: 20px solid rgba(0, 0, 0, 0);
    border-top: 20px solid #005aa8;
    border-right: 20px solid #005aa8;
    animation: jarv 3.5s linear infinite reverse;
}

.mid3 {
    width: 20px;
    border: 172px solid rgba(0, 0, 0, 0);
    border-top: 172px solid #0088ff4b;
    border-right: 172px solid #0088ff4b;
    animation: jarv 3.5s linear infinite reverse;
}

.in {
    width: 11%;
    border: 10px solid #0088ff;
    border-bottom: 5px solid #00000000;
    rotate: 45deg;
    animation: jarv2 2s linear infinite;
}

.inmost3 {
    width: 35px;
    background: #0088ff;
}

.inmost2 {
    width: 80px;
    border: 13px solid #0088ff;
}

.inmost {
    width: 8%;
    border: 26px solid #0088ff;
    border-top: 26px solid #00000000;
    border-bottom: 26px solid #00000000;
    animation: jarv 1s linear infinite reverse;
}

@keyframes jarv {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes jarv2 {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}

@media screen and (max-width: 420px) {
    .jarv-container {
        overflow: hidden;
    }
}

@media screen and (max-width: 551px) {
    .jarv-container {
        top: 30px;
    }
}
</style>