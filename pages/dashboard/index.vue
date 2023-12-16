<script lang="ts" setup>
definePageMeta({
    layout: 'dashboard',
    name: "dashboard",
    path: "/dashboard",
})

import type { announcesProps } from '~/components/Dashboard/Announcement.vue';
import { mockDonators } from '~/mock/donators';
import { mockNovels } from '~/mock/books';

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

</script>
<template>
    <div :class="$style.container">
        <DashboardWelcomeUser name="Douglas" image-src="/images/placeholder.jpg" />
        <DashboardAnnouncement :announces="announces" />
        <DashboardNovels :novels="mockNovels"/>
        <DashboardDonators :donators="mockDonators" :donations-goal="300" />
    </div>
</template>
<style lang="scss" module>
.container {
    display: grid;
    grid-template-columns: map-get($spacing, 'common-2') [content-start] 1fr 1fr [content-end] map-get($spacing, 'common-2');
    grid-auto-rows: minmax(140px, max-content);
    grid-auto-flow: column dense;
    gap: map-get($spacing, 'biggest');
    grid-template-areas:
        ". welcome-user welcome-user ."
        ". announcements announcements ."
        ". novels novels ."
        ". donators donators .";
    padding: 1rem 0;

    & > * {
        grid-column: content;
    }
}
</style>