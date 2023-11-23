<template>
    <PageHeader />
    <main :class="$style.mainContent">
        <slot></slot>
    </main>
    <!-- <Sidebar /> -->
</template>
<style lang="scss" module>
.main-content {
    position: relative;
    overflow: hidden;
}
</style>