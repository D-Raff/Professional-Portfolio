<template>
  <div id="Main">
    <div class="split">
        <div class="open"></div>
        <div class="open2"></div>
    </div>
      <div class="content">
        <h1>About me</h1>
      </div>
    </div>
</template>

<script setup>
onMounted(() => {
  useGsap.to(".open", {
    duration: 1,
    x:-10,
    delay: .2,
});
useGsap.to(".open", {
    duration: 1,
    x:-700,
    delay: 1.1,
});
useGsap.to(".open2", {
    duration: 1,
    x:10,
    delay: .2,
  });
  useGsap.to(".open2", {
    duration: 1,
    x:700,
    delay: 1.1,
  });
});
</script>

<style scoped>
#Main {
  min-height: 100vh;
  width: 100vw;
  background: #030303;
  display: flex;
  overflow-x: hidden;
  position: relative;
}
.split{
    display: flex;
    position: absolute;
}
.content {
    height: 100%;
    width: 100%;
    color: #67c7eb;
    display: flex;
    justify-content: center;
    font-family: "Electrolize", sans-serif;
}
.open {
  height: 100vh;
  width: 50vw;
  border-right: 2px solid #67c7eb;
  box-shadow: inset -1px 0px 5px 0px #67c7eb;
}
.open2 {
  height: 100vh;
  width: 50vw;
  right: 0px;
  border-left: 2px solid #67c7eb;
  box-shadow: inset 1px 0px 5px 0px #67c7eb;
}
:is(.open, .open2) {
  background-color: #030303;
  position: relative;
}
</style>
