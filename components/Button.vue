<script lang="ts" setup>
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
    display: flex;
    gap: map-get($spacing, 'min');
    text-align: center;
    font-weight: 500;
    background-color: $c-primary;
    color: $c-primary-darken;
    padding: .25em .5em;
    border: none;
    border-radius: map-get($border-radius, 'thin');
}
</style>