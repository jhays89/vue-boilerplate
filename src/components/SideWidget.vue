<template>
    <div class="side-widget">
        <div class="widget-box">Hello</div>
    </div>
</template>

<script>

</script>

<style scoped>
.side-widget {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.7);
}

.side-widget .widget-box {
    position: relative;
    background-color: red;
    min-width: 500px;
    width: 50%;
}
</style>