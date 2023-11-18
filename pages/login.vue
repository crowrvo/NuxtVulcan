<script setup lang="ts">
definePageMeta({
    layout: "log"
});
</script>
<template>
    <div :class="$style.container">
        <ButtonLink to="/">
            <img src="/images/brand/logo.png" alt="Montanha que é usada pela logo da Vulcan Scanlator" :class="$style.logo">
        </ButtonLink>
        <LoginCard />
    </div>
</template>
<style lang="scss" module>
@use "@/assets/scss/settings/colors";

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