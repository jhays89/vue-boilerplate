<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
}
</style>
