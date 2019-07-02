<template>
    <div class="user-added-notification">
        <div class="header">
            <span class="close-btn" @click="closeNotification">×</span>
        </div>
        <div class="content">
            User added!
        </div>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus';

export default {
    name: 'app-notification-user-added',

    components: {
        
    },

    data() {
        return {

        };
    },

    methods: {
        closeNotification() {
            EventBus.$emit('close-app-notification');
        }
    }
}
</script>

<style>
.user-added-notification {

}
</style>