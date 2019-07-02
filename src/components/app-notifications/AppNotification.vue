<template>
    <div class="app-notification" :class="{ 'is-opened': isOpened }" v-on:click.self="closeNotification">
        <transition name="swipe">
            <component class="notification" :is="notification"></component>
        </transition>
    </div>
</template>

<script>
import AppUserAddedNotification from '../app-notifications/UserAddedNotification';

import { EventBus } from '../../event-bus.js';

export default {
    name: 'app-notification',

    components: {
        'app-notification-user-added': AppUserAddedNotification
    },

    data() {
        return {
            notification: null,
            notificationOptions: null,
            isOpened: false
        };
    },

    methods: {
        setNotification(notification) {
            this.notification = notification.name;
            this.notificationOptions = notification.options;

            this.isOpened = true;
        },

        closeNotification() {
            this.notification = null,
            this.notificationOptions = null;

            this.isOpened = false;
        }
    },

    created() {
        EventBus.$on('open-app-notification', this.setNotification);
        EventBus.$on('close-app-notification', this.closeNotification);
    },

    destroyed() {
        EventBus.$off('open-app-notification', this.setNotification);
        EventBus.$off('close-app-notification', this.closeNotification);
    }
}

</script>

<style>
/*UPDATE THE ANIMATION AND STYLES FOR THE NOTIFICATIONS ___ STILL USINGN SIDE WIDGET*/
.app-notification .header {
    position: relative;
    height: 60px;
    border-bottom: 2px solid #777;
    background-color: #444;
}

.app-notification .header .close-btn {
    position: absolute;
    padding: 5px;
    right: 10px;
    top: 5px;
    font-size: 40px;
    color: #fff;
}

.app-notification .header .close-btn:hover {
    cursor: pointer;
}

</style>
<style scoped>
.app-notification {
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

.app-notification.is-opened {
    left: 0;
    opacity: 1;
}

.app-notification .notification {
    position: relative;
    left: 0;
    width: 400px;
    background-color: #fff;
}

.app-notification .swipe-enter-active, .app-notification .swipe-leave-active {
    transition: left 300ms ease-out 50ms; 
}

.app-notification .swipe-enter, .app-notification .swipe-leave-to {
    left: 100%;
}

@media screen and (max-width: 500px) {
    .app-notification .widget {
        width: 100%;
    }
}
</style>