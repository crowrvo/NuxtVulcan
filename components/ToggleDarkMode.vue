<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
    attribute: "theme",
})
const toggleDarkMode = useToggle(isDark)
</script>
<template>
    <div :class="toggle.toggleDarkMode" >
        <Icon icon="sun" />
        <div :class="[toggle.toggle, {'dark-mode': isDark }]" @click="toggleDarkMode()">
            <div></div>
        </div>
        <Icon icon="moon" />
    </div>
</template>
<style lang="scss" module="toggle">
.toggle-dark-mode {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: map-get($spacing, 'common-2');
    padding: 5px 10px;
    min-width: 50px;
    height: 40px;
    background: $c-dark-mode;
    border-radius: map-get($border-radius, 'common');
    transition: background-color .8s ease-in;
    color: $c-secundary;

    & i {
        font-size: 22px;
        display: block;
    }

    & .toggle {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 2px;
        border-radius: 20px;
        background: adjust-color($c-secundary, $lightness: 10%);
        box-shadow: map-get($box-shadow, 'inside-fields');
        min-height: 22px;
        min-width: 40px;
        transition: justify-content .8s ease;
        
        & div {
            width: 16px;
            height: 16px;
            background: adjust-color($c-white, $alpha: -.1);
            border-radius: 50%;
            border: 1px solid $c-white;
        }

        &[class*="dark-mode"] {
            justify-content: flex-end;
            box-shadow: map-get($box-shadow, 'inside-fields_dark-mode');
        }
    }
}

html[theme*='dark'] {
    & .toggle-dark-mode {
        background: $c-dark;
        color: $c-secundary;

        & .toggle {
            background: adjust-color($c-secundary, $lightness: -10%);
        }
    }
}
</style>