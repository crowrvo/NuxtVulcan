<script lang="ts" setup>
const route = useRoute();
</script>
<template>
    <header :class="$style.pageHeader">
        <h1 :class="$style.pageHeaderName">{{ route.name }}</h1>
    </header>
</template>
<style lang="scss" module>
@import "../assets/scss/colors";

.page-header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;
    display: grid;
    grid-auto-columns: repeat(12, 1fr);
    align-items: center;
    place-content: center;
    min-height: 60px;
    background: $c-background;
    box-shadow: 0 0px 12px -5px $c-dark;

    &__name {
        font-size: xx-large;
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
        color: $c-primary-darken;
        margin: .25rem 0;
        user-select: none;
    }
}
</style>