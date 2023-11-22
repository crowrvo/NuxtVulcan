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
.button {
    display: block;
    text-align: center;
    background-color: $c-primary;
    color: $c-primary-darken;
    padding: .5em;
    border: none;
    border-radius: 4px;
}
</style>