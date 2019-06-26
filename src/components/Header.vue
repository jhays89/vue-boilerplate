<template>
    <div class="header">
        <div class="logo-container">
        </div>
        <div class="mobile-menu-container">
            mobile menu
        </div>
    </div>
</template>

<script>
export default {
   data() {
        return {};
    }
}
 
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #444;
    background-image: url('../assets/header-bg-transparent.png');
    background-size: 20px;
    color: #fff;
}

.header .logo-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url('../assets/solid-justin.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 15px;
}

.header .mobile-menu-container {
    margin-right: 15px;
}
</style>