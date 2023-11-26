<script setup lang="ts">
definePageMeta({
    layout: "log",
    name: "Login"
});
</script>
<template>
    <div :class="$style.container">
        <ButtonLink to="/">
            <NuxtImg src="/images/brand/logo.png" alt="Montanha da logo da Vulcan Scanlator" :class="$style.logo" format="avif" />
        </ButtonLink>
        <LoginCard />
        <ToggleDarkMode />
    </div>
</template>
<style lang="scss" module>
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    background-image: url("/images/background.jpg");
    background-size: cover;
    background-position: center center;
    padding: 32px;
}

.logo {
    display: block;
    width: 100%;
    height: auto;
    max-height: 125px;
    aspect-ratio: 4/4;
    object-fit: contain;
}
</style>