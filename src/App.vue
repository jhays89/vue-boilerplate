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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,400i,700');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

#app {
  position: relative;
  display: flex;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-size: 14px;
  font-family: Roboto, 'Avenir', Helvetica, Arial, sans-serif;
}

h1, h2, h3, h4 {
  font-family: Roboto Condensed, sans-serif, 'Avenir', Helvetica, Arial;
}

h1 {
  font-size: 30px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 16px;
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
