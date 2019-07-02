<template>
  <div class="hello">
    <md-button class="md-raised md-primary" @click="createAppNotificationEvent">App Notification</md-button>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus.js';

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },

  methods: {
    createAppNotificationEvent() {
      var widget = {
        name: 'app-notification-user-added',
        options: {}
      };

      EventBus.$emit('open-app-notification', widget);
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
