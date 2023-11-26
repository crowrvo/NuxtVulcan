<script lang="ts" setup>
import { useSortable } from '@vueuse/integrations/useSortable';

export type workProps = {
    name: string,
    imageUrl: string,
    data: {
        views: number,
        chapters: number
    },
    volumes: {
        name: string;
        number: number;
        chapters: {
            name: string;
            number: number;
        }[];
    }[]
}

const work = toRef<workProps>({
    name: "Legado de sangue",
    imageUrl: "/images/placeholder.jpg",
    data: {
        views: 21020921,
        chapters: 332
    },
    volumes: [{
        name: "A queda",
        number: 1,
        chapters: [{
            name: "O começo de tudo",
            number: 1
        }, {
            name: "Conspiração",
            number: 2
        }]
    }, {
        name: "Suspiro",
        number: 2,
        chapters: [{
            name: "John e Michael",
            number: 1
        }]
    }, {
        name: "A notícia",
        number: 3,
        chapters: [{
            name: "Conto de fadas não são realmente reais, independente de qualquer coisa",
            number: 1
        }]
    }, {
        name: "Contando Mentiras",
        number: 4,
        chapters: [{
            name: "Quem fez o que?!",
            number: 1
        }, {
            name: "Viagem à Londres",
            number: 2
        }]
    }]
});

definePageMeta({
    layout: "dashboard",
    name: "Ver mais"
})

const seeMoreList = ref<HTMLElement>();
useSortable(seeMoreList.value, work.value.volumes, {
    animation: 150,
    // handle: '.drag',
    // draggable: '.chapter'
})
</script>
<template>
    <div :class="$style.container">
        <div :class="$style.seeMore">
            <h1 :class="$style.title">{{ work.name }}</h1>
            <div :class="$style.seeMoreSerialization">
                <div :class="$style.seeMoreWorkInfo">
                    <div :class="$style.seeMoreWorkVolume" v-for="volume in work.volumes">
                        <h2 :class="$style.title">Volume {{ volume.number }}: <span>{{ volume.name }}</span></h2>
                        <ul :class="$style.seeMoreList" ref="seeMoreList">
                            <li v-for="chapter in volume.chapters" :key="chapter.number">
                                <div :class="$style.seeMoreContentArea">
                                    <div :class="[$style.dragBars, 'drag']">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <p :class="$style.seeMoreChapterInfo"><strong>Capítulo {{ chapter.number }}</strong>
                                        -
                                        {{ chapter.name }}
                                    </p>
                                </div>
                                <Button>Editar</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div :class="$style.seeMoreWorkDetails">
                    <div :class="$style.seeMoreContainImage">
                        <img :src="work.imageUrl" :alt="work.name">
                    </div>
                    <div :class="$style.seeMoreWorkData">
                        <p>Views: <span>{{ work.data.views }}</span></p>
                        <p>Capítulos: <span>{{ work.data.chapters }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" module>
.container {
    display: flex;
    justify-content: center;
    margin: 1rem;
    padding: 12px;

    @media screen and (max-width: 1024px) and (orientation: portrait) {
        margin: 8px;
        padding: 4px;
    }
}

.see-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 16px;
    background: $c-white;
    border-radius: 4px;
    // box-shadow: 0 2px 4px adjust-color($c-grayscale-3, $alpha: .35);
    box-shadow: 0 2px 4px adjust-color($c-grayscale-3, $alpha: -.75);
    height: 80svh;
    overflow: hidden;

    &>.title {
        font-size: x-large !important;
        text-transform: uppercase;
        text-align: center;
        color: $c-dark;
        border-bottom: 2px solid $c-dark;
        padding: 0 0px 16px;
        width: 100%;
    }

    &__serialization {
        display: flex;
        gap: 16px;
        width: 100%;
        max-height: 100%;
    }

    &__work-details {
        flex: 1 60%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0 24px;
        height: 100%;
        border-left: 2px solid $c-dark;

        @media screen and (max-width: 1024px) and (orientation: portrait) {
            border-left: none !important;
        }

        @media screen and (max-width: 1024px) and (orientation: landscape) {
            padding: 0 24px;
        }
    }

    &__contain-image {
        flex: 1 1 40%;
        max-height: 200px;

        & img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }

        @media screen and (max-width: 1024px) and (orientation: portrait) {
            & {
                flex: 0 1 max-content;
                height: 200px;
            }
        }
    }

    &__work-data {
        flex: 1 fit-content;
        display: flex;
        flex-direction: column;
        gap: 4px;

        & p {
            font-size: medium;
            font-weight: 600;
            color: $c-dark;
            margin: 0;
            text-transform: uppercase;

            & span {
                color: $c-primary-darken;
                font-weight: 300;
                text-transform: capitalize;
            }
        }
    }

    &__work-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: 100%;
        overflow: hidden scroll;
    }

    &__work-volume {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    & .title {
        color: $c-primary-darken;
        font-size: large;
        margin: 0;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: fit-content;
        overflow: hidden scroll;
        width: 100%;

        & li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 4px 16px;
            color: $c-primary-darken;
            background-color: transparent;
            min-width: 100%;
            // box-shadow: 0 0 4px adjust-color($c-primary-darken, $alpha: .4);
            box-shadow: 0 0 4px adjust-color($c-primary-darken, $alpha: -.60);
            border-radius: 4px;
        }
    }

    &__content-area {
        display: flex;
        align-items: center;
        gap: 8px;

        & p {
            font-weight: 300;
        }
    }

    &__chapter-info {
        color: $c-primary-darken;
    }

    @media screen and (max-width: 1024px) and (orientation: portrait) {
        & {
            max-height: fit-content;
        }
    }
}

.title {
    color: $c-primary-darken;
    font-size: x-large;
    margin: 0;

    & span {
        font-weight: 300;
    }
}

.drag-bars {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: max-content;
    cursor: pointer;

    & div {
        width: 28px;
        height: 100%;
        padding: 2px;
        border-radius: 4px;
        background-color: $c-primary-darken;
    }
}

html[theme*='dark'] {
    & .see-more {
        background: $c-dark-mode;

        &>.title {
            color: $c-primary-lighten !important;
            border-bottom: 2px solid $c-primary-lighten;
        }

        &__serialization {
            flex-direction: column-reverse;

            @media screen and (max-width: 1024px) and (orientation: landscape) {
                flex-direction: row;
            }
        }

        &__work-details {
            border-left: 2px solid $c-primary-lighten;
        }

        &__work-data p {
            color: $c-primary-lighten;

            & span {
                color: $c-primary;
            }
        }

        & .title {
            color: $c-primary-lighten
        }

        &__list li {
            color: $c-primary-lighten;
            box-shadow: 0 0 4px adjust-color($c-primary-lighten, $alpha: .4);
        }

        &__chapter-info {
            color: $c-primary-lighten;
        }
    }

    & .title {
        color: $c-primary-lighten;
    }

    & .drag-bars div {
        background-color: $c-primary-lighten;
    }
}
</style>