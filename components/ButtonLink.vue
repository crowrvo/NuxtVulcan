<script lang="ts" setup>
defineProps<{
    to: string,
    title?: string,
    rel?: string
}>();
</script>
<template>
    <NuxtLink :to="to" :title="title" :rel="rel"><slot></slot></NuxtLink>
</template>
