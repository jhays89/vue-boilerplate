<template>
    <md-list class="main-item-list" @click="closeMobileMenu">
        <router-link to="/Test" class="nav-item" >
        <span class="nav-text">Inbox</span>
        <i class="fa fa-envelope icon"></i>
        </router-link>

        <router-link to="/Test" class="nav-item">
        <span class="nav-text">Sent Mail</span>
        <i class="fa fa-address-book icon"></i>
        </router-link>

        <router-link to="/" class="nav-item">
        <span class="nav-text">Trash</span>
        <i class="fa fa-trash icon"></i>
        </router-link>

        <router-link to="/" class="nav-item">
        <span class="nav-text">Spam</span>
        <i class="fa fa-wrench icon"></i>
        </router-link>
    </md-list>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
    props: ['isMobileMenu'],

    methods: {
        closeMobileMenu() {
            if(this.isMobileMenu) {
                EventBus.$emit('close-widget');
            }
        }
    }
}
</script>

<style scoped>

.main-item-list .nav-item {
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 10px 15px 10px 8px;
    color: #fff;

    transition: background-color 250ms ease-in;
}

.main-item-list .nav-item:hover {
    text-decoration: none;
    color: #fff;
    background-color: #358ecf;
}

.main-item-list .nav-item .icon {
    position: relative;
    left: 5px;
    top: 0;
    transition: left 175ms ease-in;
}

.main-item-list .nav-item:hover .icon {
    left: 8px;
}
</style>