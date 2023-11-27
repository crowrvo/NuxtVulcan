<script lang="ts" setup>
defineEmits(['toggle-sidebar']);
defineProps<{
    toggleTheme?: string;
}>();

const route = useRoute();
</script>
<template>
    <header :class="$style.pageHeader">
        <div :class="$style.pageHeaderMenu" @click="$emit('toggle-sidebar')">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h1 :class="$style.pageHeaderName">{{ route.name }}</h1>
        <div :class="$style.pageSettings">
            <ToggleDarkMode :theme="toggleTheme" />
        </div>
    </header>
</template>
<style lang="scss" module>
.page-header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    z-index: 900;
    width: 100%;
    height: 60px;
    background: $c-background;
    padding: 0 30px;
    box-shadow: 0 0px 12px -5px $c-dark;

    &__menu {
        display: flex;
        flex-direction: column;
        gap: 4px;
        height: 24px;
        width: 34px;

        & div {
            flex: 1 1 auto;
            min-height: 2px;
            background: $c-primary-darken;
            border-radius: 4px;
        }
    }

    &__name {
        font-size: medium;
        font-size: calc(12px + 3svh);
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
        color: $c-primary-darken;
        margin: 0;
        user-select: none;

        @media screen and (max-width: 1080px) and (orientation: portrait) {
            & {
                font-size: calc(12px + 1svh);
            }
        }
    }
}

.page-settings {
    justify-self: end;

    &>div {
        background: transparent !important
    }
}

html[theme*='dark'] {
    & .page-header {
        background: $c-dark-mode;

        &__menu div {
            background: $c-primary-lighten;
        }

        &__name {
            color: $c-primary-lighten;
        }
    }
}
</style>