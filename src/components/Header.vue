<template>
    <div class="header">
        <div class="logo-container">
        </div>
        <div class="mobile-menu-icon-container" @click="createSideWidgetEvent">
            <div class="menu-bars-wrapper">
                <div class="menu-bar"></div>
                <div class="menu-bar"></div>
                <div class="menu-bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
    name: 'app-header',

    data() {
        return {};
    },
    
    methods: {
        createSideWidgetEvent() {
            var widget = {
                name: 'menu-side-widget',
                options: {}
            };
            
            EventBus.$emit('open-side-widget', widget);
        }
    }
}
 
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #444;
    background-image: url('../assets/header-bg-transparent.png');
    background-size: 20px;
    color: #fff;
}

.header .logo-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url('../assets/solid-justin.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 15px;
}

.header .mobile-menu-icon-container {
    display: flex;
    align-items: center;
    margin-right: 15px;
    width: 35px;
    height: 35px;
}

.header .mobile-menu-icon-container:hover {
    cursor: pointer;
}

.header .mobile-menu-icon-container .menu-bar {
    height: 2px;
    background-color: #fff;
    margin-bottom: 6px;

    transition: transform 250ms ease-out;
}

.header .mobile-menu-icon-container:hover .menu-bar {
    transform: scaleX(.8);
}

.header .mobile-menu-icon-container .menu-bars-wrapper {
    width: 100%;
}

@media screen and (min-width: 769px) {
    .header .mobile-menu-icon-container {
        display: none;
    }
}
</style>