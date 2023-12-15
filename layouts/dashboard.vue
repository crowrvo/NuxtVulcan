<script setup lang="ts">
import { useActiveElement, syncRefs } from '@vueuse/core';

const sidebar = ref<HTMLElement>()
const content = ref<HTMLElement>()
const activeElement = useActiveElement()

const sidebarVisible = ref(false)
const minimizeContent = ref(false)
syncRefs(sidebarVisible, minimizeContent);
watch(activeElement, element => {
    if(element === sidebar.value){
        sidebarVisible.value = !sidebarVisible.value;
    }else if(element === content.value){
        minimizeContent.value = !minimizeContent.value
    }
})

</script>
<template>
    <PageHeader @toggle-sidebar="() => sidebarVisible = !sidebarVisible" />
    <main ref="content" :class="[$style.mainContent, {minimize: minimizeContent}]">
        <slot></slot>
    </main>
    <Sidebar ref="sidebar" :visible="sidebarVisible" @toggle-sidebar="() => sidebarVisible = !sidebarVisible"/>
</template>
<style lang="scss" module>
.main-content {
    position: relative;
    overflow: hidden;
    transition: filter 200ms ease;

    &.minimize {
        filter: brightness(50%);
    }
}
</style>