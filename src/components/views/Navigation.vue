<template>
    <div class="navigation" v-bind:class="{ 'collapsed': isCollapsed }">
        <md-list class="main-item-list">
            <router-link to="/Test" class="nav-item">
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
        <div class="collapse-bar" v-on:click="toggleCollapse">
            <div class="icon-wrapper">
                <i class="fa fa-chevron-left icon"></i>
                <i class="fa fa-chevron-left icon"></i>
            </div>
        </div>
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
    padding: 0;
    background-color: #27a0f8;

    transition: left 250ms ease-in-out;
}

.navigation .collapse-bar {
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 1;
    right: 0;
    top: 0;
    width: 15px;
    height: 100%;

    transition: right 300ms ease-in;
}

.navigation .collapse-bar:hover {
    cursor: e-resize;
}

.navigation .collapse-bar .icon {
    position: relative;
    left: 2px;
    font-size: 8px;
    color: #e0e0e0;

    transition: transform 250ms ease-in;
}

.navigation.collapsed .collapse-bar .icon {
    transform: rotate(180deg);
}

.navigation .collapse-bar .icon-wrapper {
    display: flex;
    position: relative;
    left: -10px;
    align-content: center;
    border-radius: 50%;
    padding: 10px;
    width: 30px;
    height: 30px;
    background-color: #27a0f8;
}

.navigation.collapsed .main-item-list {
    left: -182px;
}

.navigation.collapsed .collapse-bar {
    right: -15px;
}

.navigation.collapsed {
    flex: 0 0 0px;
    padding-right: 0;
}

.navigation .nav-item {
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 10px 15px 10px 8px;
    color: #fff;

    transition: background-color 250ms ease-in;
}

.navigation .nav-item:hover {
    text-decoration: none;
    color: #fff;
    background-color: #358ecf;
}

.navigation .nav-item .icon {
    position: relative;
    left: 5px;
    top: 0;
    transition: left 175ms ease-in;
}

.navigation .nav-item:hover .icon {
    left: 8px;
}
</style>