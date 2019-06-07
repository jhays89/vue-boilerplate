<template>
    <div class="navigation" v-bind:class="{ 'collapsed': isCollapsed }">
        <md-list class="main-item-list">
            <router-link to="/Test">
            <span class="nav-item">Inbox</span>
            <i class="fa fa-envelope"></i>
            </router-link>

            <router-link to="/Test">
            <span class="nav-item">Sent Mail</span>
            <i class="fa fa-address-book"></i>
            </router-link>

            <router-link to="/">
            <span class="nav-item">Trash</span>
            <i class="fa fa-trash"></i>
            </router-link>

            <router-link to="/">
            <span class="nav-item">Spam</span>
            <i class="fa fa-wrench"></i>
            </router-link>
        </md-list>
        <div class="collapse-bar" v-on:click="toggleCollapse"></div>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        components: {

        },

        data() {
            return {
                isCollapsed: false
            };
        },

        methods: {
            toggleCollapse() {
                this.isCollapsed = !this.isCollapsed;
            }
        }
    }
</script>

<style scoped>
.navigation {
    position: relative;
    flex: 0 0 180px;
    padding-right: 15px;

    transition: all 250ms ease-in-out;
}

.navigation .main-item-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;

    transition: left 250ms ease-in-out;
}

.navigation .collapse-bar {
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 100%;
    background-color: #105384;
}

.navigation .collapse-bar:hover {
    cursor: pointer;
}

.navigation.collapsed .main-item-list {
    left: -182px;
}

.navigation.collapsed {
    flex: 0 0 15px;
}
</style>