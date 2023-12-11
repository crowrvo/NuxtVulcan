<script lang="ts" setup>
definePageMeta({
    layout: 'dashboard'
})

import type { announcesProps } from '~/components/Dashboard/Announcement.vue';
import type { novelInfo } from '~/components/Dashboard/Novels.vue';
import type { PatronerProps } from '~/components/PatronerCard.vue';

const novels:novelInfo[] = [{
    name: "One Punch Man",
    workAs: "Tradutor",
    views: 2301313132,
    chapters: 300,
    comments: 12311132,
    url: "#opm",
    backgroundUrl: "/images/placeholder.jpg"
}, {
    name: "Jujutsu Kaisen",
    workAs: "Editor",
    views: 12312323,
    chapters: 312,
    comments: 201132,
    url: "#jujustu",
    backgroundUrl: "/images/placeholder2.jpg"
}]

const announces:announcesProps[] = [{
    url: "#hum",
    backgroundUrl: "/images/placeholder.jpg",
    title: "Jujutsu Kaisen",
    label: "Alguma temporada nova",
    date: "22/02/23",
    hour: "12:40"
}, {
    url: "#test",
    backgroundUrl: "/images/placeholder2.jpg",
    title: "One punch man",
    label: "Alguma nova",
    date: "12/03/23",
    hour: "17:30"
}]

const patroners: PatronerProps[] = [{
    name: "Goku",
    contribuiteType: "Direto",
    contribuitionValue: 23.4,
    contribuitionDate: new Date(),
    contribuitionTo: "Legado de Sangue",
    contribuitionUrl: "#",
    url: "#"
},{
    name: "Satoro",
    contribuiteType: "Direto",
    contribuitionValue: 23.4,
    contribuitionDate: new Date(),
    contribuitionTo: "Legado de Sangue",
    contribuitionUrl: "#",
    url: "#"
}];
</script>
<template>
    <div :class="$style.container">
        <DashboardWelcomeUser name="Douglas" image-src="/images/placeholder.jpg" />
        <DashboardAnnouncement :announces="announces" />
        <DashboardNovels :novels="novels"/>
        <DashboardPatroners :patroners="patroners" :donations-goal="300" />
    </div>
</template>
<style lang="scss" module>
.container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(140px, max-content);
    grid-auto-flow: column dense;
    gap: map-get($spacing, 'biggest');
    grid-template-areas:
        "welcome-user welcome-user welcome-user welcome-user"
        "announcements announcements announcements announcements"
        "novels novels novels novels"
        "patroners patroners patroners patroners";
    padding: 1rem;
}
</style>