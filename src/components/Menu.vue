<template>
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
</template>

<style scoped>
.main-item-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    padding: 5px 0 0;
    background-color: #27a0f8;

    transition: left 250ms ease-in-out;
}


.main-item-list .nav-item {
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 10px 15px 10px 8px;
    color: #fff;

    transition: background-color 250ms ease-in;
}

.main-item-list .nav-item:hover {
    text-decoration: none;
    color: #fff;
    background-color: #358ecf;
}

.main-item-list .nav-item .icon {
    position: relative;
    left: 5px;
    top: 0;
    transition: left 175ms ease-in;
}

.main-item-list .nav-item:hover .icon {
    left: 8px;
}
</style>