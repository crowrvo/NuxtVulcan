<script lang="ts" setup>
const route = useRoute();
defineProps<{
    toggleTheme?: string;
}>();
</script>
<template>
    <header :class="$style.pageHeader">
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
    width: 100%;
    z-index: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    background: $c-background;
    box-shadow: 0 0px 12px -5px $c-dark;

    &__name {
        font-size: medium;
        font-size: calc(1rem + 4svh);
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
        color: $c-primary-darken;
        margin: 0;
        user-select: none;

        @media screen and (max-width: 1080px) and (orientation: portrait) {
            & {
                font-size: calc(1rem + 1svh);
            }
        }
    }
}

html[theme*='dark'] {
    & .page-header {
        background: $c-dark-mode !important;

        &__name {
            color: $c-primary-lighten !important;
        }
    }
}

.page-settings {
    justify-self: end;

    &>div {
        background: transparent
    }
}

html[theme*='dark'] {
    & .page-settings {
        &>div {
            background: transparent
        }
    }
}
</style>