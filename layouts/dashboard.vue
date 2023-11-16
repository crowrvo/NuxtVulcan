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
    // left: 12vw;
    // width: 88vw;
    margin: 60px 0;
    padding: 1rem;
    overflow: hidden;
}
</style>