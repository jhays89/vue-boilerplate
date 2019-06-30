<template>
    <div class="side-widget" :class="{ 'is-opened': isOpened }" v-on:click.self="closeWidget">
        <transition name="swipe">
            <component class="widget" :is="widget"></component>
        </transition>
    </div>
</template>

<script>
import MenuSideWidget from '../side-widgets/MenuSideWidget';

import { EventBus } from '../../event-bus.js';

export default {
    name: 'side-widget',

    components: {
        'menu-side-widget': MenuSideWidget
    },

    data() {
        return {
            widget: null,
            widgetOptions: null,
            isOpened: false
        };
    },

    methods: {
        setSideWidget(sideWidget) {
            this.widget = sideWidget.name;
            this.widgetOptions = sideWidget.options;

            this.isOpened = true;
        },

        closeWidget() {
            this.isOpened = false;
            this.widget = null,
            this.widgetOptions = null;
        }
    },

    created() {
        EventBus.$on('open-side-widget', this.setSideWidget);
        EventBus.$on('close-widget', this.closeWidget);
    }
}

</script>

<style>
.side-widget .header {
    position: relative;
    height: 60px;
    border-bottom: 2px solid #777;
    background-color: #444;
}

.side-widget .header .close-btn {
    position: absolute;
    padding: 5px;
    right: 10px;
    top: 5px;
    font-size: 40px;
    color: #fff;
}

.side-widget .header .close-btn:hover {
    cursor: pointer;
}

</style>
<style scoped>
.side-widget {
    position: fixed;
    left: 100%;
    opacity: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.7);

    transition: left 1ms ease-in, opacity 150ms ease-out;
}

.side-widget.is-opened {
    left: 0;
    opacity: 1;
}

.side-widget .widget {
    position: relative;
    left: 0;
    width: 400px;
    background-color: #fff;
}

.side-widget .swipe-enter-active, .side-widget .swipe-leave-active {
    transition: left 300ms ease-out 50ms; 
}

.side-widget .swipe-enter, .side-widget .swipe-leave-to {
    left: 100%;
}

@media screen and (max-width: 500px) {
    .side-widget .widget {
        width: 100%;
    }
}
</style>