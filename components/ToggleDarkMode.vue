<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
    attribute: "theme",
    modes: {
        contrast: 'contrast'
    }
})
</script>
<template>
    <div :class="toggle.toggleDarkMode">
        <!-- .Moon -->
        <div :class="toggle.toggle">
            <div :class="{'dark-mode': mode === 'dark'}" @click="mode = mode === 'dark' ? 'light' : 'dark'"></div>
        </div>
        <!-- Sun -->
    </div>
</template>
<style lang="scss" module="toggle">
.toggle-dark-mode {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 10px;
    min-width: 40px;
    height: 40px;
    background: $c-dark-mode;
    border-radius: 8px;
    transition: background-color .8s ease-in;

    & .toggle {
        position: relative;
        padding: 2px;
        border-radius: 20px;
        background: $c-primary-lighten;
        box-shadow: inset 0 2px 4px $c-primary-darken;
        min-height: 30px;
        min-width: 40px;

        & div {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 28px;
            height: 28px;
            background: $c-white;
            border-radius: 50%;
            transition: all .8s ease;

            &[class*="dark-mode"] {
                left: 2px;
            }
        }
    }
}

html[theme*='dark'] {
    & .toggle-dark-mode {
        background: $c-dark;
    }
}
</style>