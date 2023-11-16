<script lang="ts" setup>
// const navigations = [{
    // name: "teste",
    // url: '#'
// }]
</script>
<template>
    <aside :class="sidebar.sidebar">
        <!-- <NavigationBar :navigations="navigations" :has-title="true" orientation="vertical" /> -->
        <!-- <ButtonLink to="#">Config</ButtonLink> -->
    </aside>
</template>
<style lang="scss" module="sidebar">
@import "../assets/scss/colors";

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 12vw;
    height: 100vh;
    padding: 4px;
    z-index: 901;
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: space-between;
    background: $c-background;
    box-shadow: 0 0px 12px -5px $c-dark;

    & > a {
        display: block;
        padding: .25rem 1.75rem;
        text-align: center;
        background: $c-primary;
        color: $c-white;
        border-radius: 4px;
    }
}
</style>