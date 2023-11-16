<script lang="ts" setup>
import Icon from '~/utils/icon.vue';
defineProps<{
    icon?: string
}>();
</script>
<template>
    <button :class="button.button">
        <Icon v-if="icon" icon="icon"></Icon><slot></slot>
    </button>
</template>
<style lang="scss" module="button">
@import "../assets/scss/colors";

.button {
    display: block;
    text-align: center;
    background-color: $c-primary;
    color: $c-primary-darken;
    border: none;
}
</style>