<script setup lang="ts">
defineProps<{
    icon: string
}>()
</script>

<template>
    <i :class="'icon-' + icon"></i>
</template>