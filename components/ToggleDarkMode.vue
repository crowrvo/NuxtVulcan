<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import Icon from '~/utils/icon.vue';

defineProps<{
    theme?: string;
}>();

const mode = useColorMode({
    attribute: "theme",
    modes: {
        contrast: 'contrast'
    }
})
</script>
<template>
    <div :class="[toggle.toggleDarkMode, {'theme-primary': theme && theme === 'primary'}]" >
        <Icon icon="sun" />
        <div :class="toggle.toggle">
            <div :class="{ 'dark-mode': mode === 'dark' }" @click="mode = mode === 'dark' ? 'light' : 'dark'"></div>
        </div>
        <Icon icon="moon" />
    </div>
</template>
<style lang="scss" module="toggle">
.toggle-dark-mode {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 12px;
    padding: 5px 10px;
    min-width: 50px;
    height: 40px;
    background: $c-dark-mode;
    border-radius: 8px;
    transition: background-color .8s ease-in;
    color: $c-primary-lighten;

    &[class*='theme-primary']{
        color: $c-primary;
    }

    & i {
        font-size: 22px;
        display: block;
    }

    & .toggle {
        position: relative;
        padding: 2px;
        border-radius: 20px;
        background: $c-primary-lighten;
        box-shadow: inset 0 2px 4px $c-primary-darken;
        height: 22px;
        min-width: 40px;

        & div {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 17px;
            height: 17px;
            background: $c-white;
            border-radius: 50%;
            transition: all .8s ease;

            &[class*="dark-mode"] {
                left: auto;
                right: 2px;
            }
        }
    }
}

html[theme*='dark'] {
    & .toggle-dark-mode {
        background: $c-dark;
        color: $c-primary-lighten;
    }
}
</style>