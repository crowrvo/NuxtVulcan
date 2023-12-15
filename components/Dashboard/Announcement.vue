<script lang="ts" setup>
export type announcesProps = {
    url: string;
    backgroundUrl: string;
    title: string;
    label: string;
    date: string;
    hour: string;
    alt?: string;
}

const props = defineProps<{
    announces: announcesProps[]
}>();

type currentAnnounceProps = announcesProps & {
    index: number
}

const currentAnnounce: currentAnnounceProps = reactive({
    url: props.announces[0].url || "#",
    date: props.announces[0].date || "",
    hour: props.announces[0].hour || "",
    backgroundUrl: props.announces[0].backgroundUrl || "",
    title: props.announces[0].title || "",
    label: props.announces[0].label || "",
    index: 0
});
</script>
<template>
    <div :class="card.cardAnnouncement">
        <div :class="card.cardAnnouncementAnnounce">
            <ButtonLink v-for="announce in announces" :to="announce.url" :key="announce.url"
                :class="card.cardAnnouncementContainImage">
                <NuxtImg v-if="announce.url === currentAnnounce.url || announces[0] === announce" :src="announce.backgroundUrl"
                    :alt="announce.alt" :class="[card.cardAnnouncementImage, 'active']" format="avif"/>
                <NuxtImg v-else :src="announce.backgroundUrl" :alt="announce.alt"
                    :class="[card.cardAnnouncementImage, { active: announce === currentAnnounce }]" format="avif"/>
            </ButtonLink>
        </div>
        <div :class="card.cardAnnouncementInfo">
            <h3>{{ currentAnnounce.title }}</h3>
            <p>{{ currentAnnounce.label }}</p>
            <span><time>{{ currentAnnounce.date }} - {{ currentAnnounce.hour }}</time></span>
        </div>
    </div>
</template>
<style lang="scss" module="card">
.card-announcement {
    grid-area: announcements;
    display: flex;
    box-shadow: 0 0 12px -5px $c-dark-mode;
    padding: 1rem;
    gap: 1rem;
    border-radius: map-get($border-radius, 'common');;

    &__announce {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        gap: map-get($spacing, 'common-1');
        width: 100%;
        height: max-content;
    }

    &__selector {
        grid-row: 2/2;
        display: flex;
        gap: map-get($spacing, 'common-2');
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        & span {
            display: block;
            width: 20%;
            height: 6px;
            background-color: adjust-color($c-primary, $alpha: .4);
            border-radius: map-get($border-radius, 'common');;

            &[class*="active"] {
                background-color: $c-primary;
            }
        }
    }

    &__contain-image {
        display: block;
        grid-row: 1/1;
        width: 100%;
        height: 100%;
        max-height: 200px;
    }

    &__image {
        display: none;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        margin: 0;
        border-radius: map-get($border-radius, 'common');;

        &[class*="active"] {
            display: block;
        }
    }

    &__info {
        min-width: 40%;
        color: $c-primary-darken;

        & h3 {
            text-transform: uppercase;
            margin: 0 0 8px;
            font-size: large;
            font-weight: bold;
            border-bottom: 2px solid $c-primary-darken;
        }

        & p {
            font-size: small;

            &::first-letter {
                text-transform: capitalize;
            }
        }

        & span {
            font-weight: 500;
            font-size: small;
            display: block;
            text-align: right;
        }
    }
}

html[theme*='dark'] {
    & .card-announcement {
        &__info {
            color: $c-secundary;

            & h3 {
                border-bottom: 2px solid $c-secundary;
            }

            & span {
                color: $c-grayscale-2;
            }
        }
    }
}
</style>