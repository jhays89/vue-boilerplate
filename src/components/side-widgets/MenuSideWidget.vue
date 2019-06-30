<template>
    <div class="menu-side-widget">
        <div class="header">
            <span class="close-btn" @click="closeWidget">×</span>
        </div>
        <div class="content">
            <app-menu :isMobileMenu="true"/>
        </div>
    </div>
</template>

<script>
import Menu from '../Menu';
import { EventBus } from '../../event-bus';

export default {
    name: 'menu-side-widget',

    components: {
        'app-menu': Menu
    },

    data() {
        return {

        };
    },

    methods: {
        closeWidget() {
            EventBus.$emit('close-widget');
        }
    }
}
</script>

<style>
.menu-side-widget .nav-text,
.menu-side-widget .icon {
    color: #444444;
} 

.menu-side-widget .nav-item:hover .nav-text,
.menu-side-widget .nav-item:hover .icon {
    color: #fff;
}
</style>