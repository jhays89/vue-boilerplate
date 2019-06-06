<template>
  <div id="app">
    <div class="main-wrapper">
      <side-nav></side-nav>
      <div class="main-content">
        <transition name="fade">
            <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from './components/side-nav';

export default {
  name: 'App',
  components: {
    'side-nav': SideNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

#app {
  position: relative;
  display: flex;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .75s;
}

.fade-enter, .fade-leave-to {
  position: fixed;
  right: -1000%;
  opacity: 0;
}

.main-wrapper {
  display: flex;
  width: 100%;
}

.main-content {
  position: relative;
  flex: 1;
}
</style>
