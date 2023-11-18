<script lang="ts" setup>
definePageMeta({
    layout: 'dashboard'
})

const novels = [{
    name: "One Punch Man",
    workAs: "Tradutor",
    views: 2301313132,
    chapters: 300,
    comments: 12311132,
    url: "#opm",
    backgroundUrl: "/images/placeholder.jpg"
},{
    name: "Jujutsu Kaisen",
    workAs: "Editor",
    views: 12312323,
    chapters: 312,
    comments: 201132,
    url: "#jujustu",
    backgroundUrl: "/images/placeholder2.jpg"
}]

const announces = [{
    url: "#hum",
    backgroundUrl: "/images/placeholder.jpg",
    title: "Jujutsu Kaisen",
    label: "Alguma temporada nova",
    date: "22/02/23",
    hour: "12:40"
},{
    url: "#test",
    backgroundUrl: "/images/placeholder2.jpg",
    title: "One punch man",
    label: "Alguma nova",
    date: "12/03/23",
    hour: "17:30"
}]
</script>
<template>
    <div :class="$style.container">
        <DashboardWelcomeUser name="Douglas" image-src="/images/placeholder.jpg" />
        <DashboardAnnouncement :announces="announces" />
        <DashboardNovels :novels="novels">Suas obras</DashboardNovels>
    </div>
</template>
<style lang="scss" module>
.container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(140px, max-content);
    grid-auto-flow: column dense;
    gap: 32px;
    grid-template-areas:
        "welcome-user welcome-user welcome-user welcome-user"
        "announcements announcements announcements announcements"
        "novels novels novels novels";
}
</style>