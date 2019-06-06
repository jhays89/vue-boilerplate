<template>
    <md-drawer md-permanent="full" class="side-nav">
        <md-list>
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
    </md-drawer>
</template>

<style scoped>
.side-nav {
    flex: 0 0 180px
}
</style>