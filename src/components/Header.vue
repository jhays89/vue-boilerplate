<template>
    <div class="header">
        <div class="logo-container">
        </div>
        <div class="mobile-menu">
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
    padding: 10px 15px;
    background-color: #444;
    color: #fff;
}

.header .logo-container {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: url('/src/assets/solid-justin.png'); /*Why is this not workin?*/
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>