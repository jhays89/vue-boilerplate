<template>
    <div class="side-widget" :class="{ 'is-opened': isOpened }" v-on:click.self="closeWidget">
        <component class="widget" :is="widget"></component>
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
        }
    },

    created() {
        EventBus.$on('open-side-widget', this.setSideWidget);
    }
}

</script>

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

    transition: left 50ms ease-in, opacity 250ms ease-in;
}

.side-widget .widget-box {
    position: relative;
    background-color: red;
    min-width: 500px;
    width: 50%;
}

.side-widget.is-opened {
    left: 0;
    opacity: 1;
}

.side-widget .widget {
    width: 400px;
    background-color: #fff; 
}

@media screen and (max-width: 500px) {
    .side-widget .widget {
        width: 100%;
    }
}
</style>