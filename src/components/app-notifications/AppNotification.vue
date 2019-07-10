<template>
    <div class="app-notification" :class="{ 'is-opened': isOpened }" v-on:click.self="closeNotification">
        <component class="notification" :is="notification"></component>
        <!-- <transition name="swipe">
            <component class="notification" :is="notification"></component>
        </transition> -->
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
    height: 35px;
    border-bottom: 2px solid #777;
    background-color: #dbc539;
}

.app-notification .header .close-btn {
    position: absolute;
    padding: 5px;
    right: 10px;
    top: 3px;
    font-size: 30px;
    color: #fff;
}

.app-notification .header .close-btn:hover {
    cursor: pointer;
}

 .app-notification .content {
    padding: 15px 20px;
 }   

</style>
<style scoped>
.app-notification {
    position: fixed;
    left: calc(50% - 200px);
    display: flex;
    justify-content: flex-end;
    width: 500px;
    top: -500px;
    z-index: 10;
    transform: scale(0);
    transform-origin: top center;

    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5);

    transition: top 250ms ease-out, transform 250ms ease-out; 
}

.app-notification.is-opened {
    top: 20px;
    transform: scale(1);
}

.app-notification .notification {
    position: relative;
    width: 100%;
    background-color: #fff;
}

@media screen and (max-width: 500px) {

}
</style>